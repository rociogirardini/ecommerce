import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const Item = ({ id, name, description, img, stock}) => {

    const [show, setShow] = useState(false)
    const verMas = () => {
        setShow(!show)
    };

    return (
        <div className='card m-3' style={{ width: '18rem'}}>
            <Link to={`/detail/${id}`}><img src={img} alt="miniatura de cuadro" className='card-img-top'/></Link>
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <button className="btn btn-info" onClick={verMas}>{show ? 'Ver menos' : 'Ver más'}</button>
                {show ? <p className='card-text'>{description}</p> : ""}
                <Link to={`/detail/${id}`}><button className='btn btn-info m-2'>Ver detalles</button></Link>
                <small>Quedan {stock} unidades en stock</small>
            </div>
        </div>
    )
}

export default Item