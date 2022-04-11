import { useContext } from "react";
import CartContext from "../context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from 'react-icons/fa'

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container m-5">
                <h3>¡Tu carrito está vacío!</h3>
                <p>Seguí mirando nuestros productos</p>
                <Link to="/"><button className="btn btnSolid"> Volver <FaArrowCircleLeft /> </button></Link>
            </div>
        )
    } else {
        return (
            <div className="container m-5">
                <h2>Detalles de tu compra</h2>
                <hr />

                {
                cart.map((item) => (
                    <div className="row" key={item.id}>
                        <div className="col">
                            <h4><strong>{item.name}</strong></h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Color del marco elegido: {item.colorMarco}</p>
                            <p>Precio por unidad: ${item.price}</p>
                            <button className="btn btn-danger mb-2" onClick={() => removeItem(item.id, item.colorMarco)}><FiTrash2 /></button>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <img src={item.img} alt={item.name} height="120vh" />
                        </div>
                        <hr />
                    </div>
                ))
            }

            <h3>Total: ${cartTotal()}</h3>
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={emptyCart}>Limpiar carrito</button>
                </div>
            </div>
            </div>
        )
    }

}

export default Cart