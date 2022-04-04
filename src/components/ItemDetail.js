import ItemCount from "./ItemCount"
import Select from "./Select"
import { useNavigate } from "react-router-dom"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useState } from "react"

const ItemDetail = ({ id, name, description, longDescription, img, stock, price, category, options }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    const [cantidad, setCantidad] = useState(0)
    const [colorMarco, setColorMarco] = useState('natural')
    const [isInShoppingCart, setIsInShoppingCart] = useState(false)

    const agregarAlCarrito = () => {
        setIsInShoppingCart(true)
        const itemToAdd = {
            id,
            name,
            price,
            img,
            colorMarco,
            cantidad,
        }

        console.log(itemToAdd)

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

            <ItemCount
                stock={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                isInShoppingCart={isInShoppingCart}
                onAdd={agregarAlCarrito} />
            <FaArrowCircleLeft className="btnVolver" onClick={handleNavigate} />
        </div>
    )

}

export default ItemDetail