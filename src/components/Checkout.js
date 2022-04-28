import React from "react";
import CartContext from "../context/CartContext";
import { useContext, useState } from "react";
import { db } from "../firebase/config";
import {
  addDoc,
  writeBatch,
  query,
  where,
  collection,
  Timestamp,
  getDocs,
  documentId,
} from "firebase/firestore";
import { Navigate, Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

// ---------------------------------------------------

const Checkout = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContext);

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOrder = {
      items: cart,
      total: cartTotal(),
      buyer: { ...values },
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, "productos");
    const q = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const products = await getDocs(q);

    const outOfStock = [];

    products.docs.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= itemInCart.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.cantidad,
        });
      } else {
        outOfStock.push(itemInCart);
      }
    });

    if (outOfStock.length === 0) {
      await batch.commit();
      addDoc(ordersRef, newOrder).then((doc) => {
        setOrderId(doc.id);
        emptyCart();
      });
    } else {
      let alerts = document.getElementById("alerts");

      let alertText = document.createElement("p");
      alertText.className = "alertText";
      alertText.append(
        "¡Nos quedamos sin stock de alguno de tus productos! Vuelve a revisar."
      );

      alerts.append(alertText);
      setTimeout(() => (alerts.innerText = ""), 4000);
    }
  };

  if (orderId) {
    return (
      <div className="container m-5">
        <h2>¡Tu compra se realizó exitosamente!</h2>
        <h3 className="centrar m-4">Guardá tu número de compra</h3>
        <p className="orderId">{orderId}</p>
        <Link to="/" className="btn btnSolid">
          {" "}
          <FaArrowCircleLeft /> Volver al inicio
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container m-5">
      <h2>Terminar tu compra</h2>
      <div id="alerts"></div>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="form-control my-2"
          type={"text"}
          placeholder="Ingresá tu nombre"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        <input
          required
          className="form-control my-2"
          type={"email"}
          placeholder="Ingresá tu email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <input
          required
          className="form-control my-2"
          type="tel"
          placeholder="Ingresá tu número de teléfono"
          name="phone"
          value={values.phone}
          onChange={handleInputChange}
          pattern="[0-9]{6,15}"
          title="El número de teléfono debe contener al menos 6 caracteres. Característica + número"
        />

        <button className="btn btnSolid" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
