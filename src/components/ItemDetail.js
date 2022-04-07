import ItemCount from "./ItemCount"
import Select from "./Select"
import { useNavigate } from "react-router-dom"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, description, longDescription, img, stock, price, category, options }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    const [cantidad, setCantidad] = useState(0)
    const [colorMarco, setColorMarco] = useState('Natural')

    const agregarAlCarrito = () => {
        const itemToAdd = {
            id,
            name,
            price,
            img,
            colorMarco,
            cantidad,
        }

        addItem(itemToAdd)
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <img src={img} alt={name} />
                </div>
                <div className="col">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{longDescription}</p>
                    <p>Elegir color del marco:
                        <Select
                            options={options}
                            onSelect={setColorMarco}
                        /></p>
                    <h3>${price}</h3>
                    {
                        stock !== 0
                            ? <div>
                                <p>Quedan {stock} unidades disponibles</p>
                                {
                                    !isInCart(id)
                                        ? <ItemCount
                                            stock={stock}
                                            cantidad={cantidad}
                                            setCantidad={setCantidad}
                                            onAdd={agregarAlCarrito} />
                                        : <div className="agregarCarrito">
                                            <Link to="/cart"> <button className='btn btn-success'>Terminar compra</button></Link>
                                        </div>
                                }
                            </div>
                            : <p style={{ color: 'red' }}><strong>¡Llegaste tarde! No hay más unidades</strong></p>
                    }
                </div>
            </div>

            <FaArrowCircleLeft className="btnAtras m-2" onClick={handleNavigate} />
        </div>
    )

}

export default ItemDetail