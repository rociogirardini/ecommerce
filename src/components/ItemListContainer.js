import ItemCount from "./ItemCount"
import { useState } from 'react';

const PropGreeting = ({ nombre, titulo, item }) => {
    const [mostrar, setMostrar] = useState(false)
    const verMas = () => {
        setMostrar(!mostrar)
        console.log(mostrar)
    }
    return (
        <div>
            <h1 className="greeting">¡Hola {nombre}! Entraste a mi tienda en línea</h1>
            <h2 className="greeting">{titulo}</h2>
            <div className="spaceInfo">
                <p>{item}</p>
            </div>
            <div className="spaceInfo">
                <button className="btn btn-info" onClick={verMas}>{mostrar ? 'Ver menos' : 'Ver más'}</button>
                {mostrar ? <span>Esta fotografía fue tomada en el Observatorio de Bosque Alegre.</span> : ""}
            </div>
            <ItemCount initial={0} stock={4} />
        </div>
    )
}
export default PropGreeting;