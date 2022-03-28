import React, { useState } from 'react'
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({ producto }) => {
    const { id, name, description, img, stock } = producto

    const [show, setShow] = useState(false)
    const verMas = () => {
        setShow(!show)
    };

    const [detalle, setDetalle] = useState(false)
    const mostrarDetalle = () => {
        setDetalle(!detalle)
    };

    console.log(id);


    return (
        <div className='card m-3' style={{ width: '18rem'}}>
            <img src={img} alt="miniatura de cuadro" className='card-img-top'/>
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <button className="btn btn-info" onClick={verMas}>{show ? 'Ver menos' : 'Ver más'}</button>
                {show ? <p className='card-text'>{description}</p> : ""}
                <button className="btn btn-info m-1" onClick={mostrarDetalle}>Ver detalles</button>
                <div>
                    {detalle ? <ItemDetailContainer miid={id}/> : ""}
                </div>
                <ItemCount initial={0} stock={stock} />
            </div>
        </div>
    )
}

export default Item