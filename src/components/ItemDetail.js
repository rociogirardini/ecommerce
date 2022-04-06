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
    const [colorMarco, setColorMarco] = useState('natural')

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
        <div className="justify-content-center">
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <p>{description}</p>
            <p>{longDescription}</p>
            <h5>Precio: ${price}</h5>
            <p>Quedan {stock} unidades disponibles</p>

            <div>
                <p>Elegir color del marco: <Select
                    options={options}
                    onSelect={setColorMarco}
                /></p>
            </div>

            {
                !isInCart(id)
                    ? <ItemCount
                        stock={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={agregarAlCarrito} />
                    : <div className="btn__agregarCarrito">
                        <Link to="/cart"> <button className='btn btn-success'>Terminar compra</button></Link>
                    </div>
            }
            <FaArrowCircleLeft className="btnVolver" onClick={handleNavigate} />
        </div>
    )

}

export default ItemDetail