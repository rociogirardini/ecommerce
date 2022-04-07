import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, img, stock, price }) => {

    const [show, setShow] = useState(false)
    const verMas = () => {
        setShow(!show)
    };

    return (
        <div className='card m-3' style={{ width: '18rem' }}>

            <Link to={`/detail/${ id }`}>
                <img src={ img } alt="miniatura de cuadro" className='cardImg card-img-top' />
            </Link>
            
            <div className='card-body'>

                <h5 className='card-title d-flex justify-content-center'>{ name }</h5>

                <p className='d-flex justify-content-center'><strong>${ price }</strong></p>

                <Link to={`/detail/${ id }`}><button className='btn btnSolid m-2'>Comprar</button></Link>

                <button className="btn btnOutline"
                    onClick={ verMas }>
                    {show ? 'Ver menos' : 'Ver más'}</button>
                {show ? <p className='card-text'>{description}</p> : ""}

                <br />

                <small>Quedan { stock } unidades en stock</small>
            </div>
        </div>
    )
}

export default Item