import ItemCount from "./ItemCount"
import { useNavigate } from "react-router-dom"
import { FaArrowCircleLeft } from 'react-icons/fa'

const ItemDetail = ({ id, name, description, longDescription, img, stock, price, category }) => {

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(-1)
    }

    return (
        <div className="justify-content-center">
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <p>{description}</p>
            <p>{longDescription}</p>
            <h5>Precio: ${price}</h5>
            <p>Quedan {stock} unidades disponibles</p>

            <ItemCount initial={0} stock={stock}/>
            <FaArrowCircleLeft color="blue" onClick={handleNavigate} />
        </div>
    )

}

export default ItemDetail