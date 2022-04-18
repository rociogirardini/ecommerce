import React from "react";
import CartContext from "../context/CartContext";
import { useContext, useState } from "react";
import { db } from "../firebase/config";
import {
  addDoc,
  collection,
  Timestamp,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { Navigate, Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      items: cart,
      total: cartTotal(),
      buyer: { ...values },
      date: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "orders");

    cart.forEach((item) => {
      const docRef = doc(db, "productos", item.id);

      getDoc(docRef).then((doc) => {
        updateDoc(docRef, {
          stock: doc.data().stock - item.cantidad,
        });
      });
    });

    addDoc(ordersRef, newOrder).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
    });
  };

  if (orderId) {
    return (
      <div className="container m-5">
        <h2>¡Tu compra se realizó exitosamente!</h2>
        <h3>Guardá tu número de compra</h3>
        <p>{orderId}</p>
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
          type="number"
          placeholder="Ingresá tu número de teléfono"
          name="phone"
          value={values.phone}
          onChange={handleInputChange}
        />

        <button className=" btn btnSolid" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
