import { useContext } from "react"
import CartContext from "../context/CartContext"
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

    return (
        <div className="container m-5">
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((item) => (
                    <div className="row" key={item.id}>
                        <div className="col">
                            <h4><strong>{item.name}</strong></h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Color del marco elegido: {item.colorMarco}</p>
                            <p>Precio por unidad: ${item.price}</p>
                            <button className="btn btn-danger mb-2" onClick={() => removeItem(item.id)}><FiTrash2 /></button>
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

export default Cart