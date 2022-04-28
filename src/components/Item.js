import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, img, stock, price }) => {

    const [show, setShow] = useState(false)
    const verMas = () => {
        setShow(!show)
    };

    return (
        <div className="itemCard">

            <div className='row'>
                <h5 className='centrar mt-4 itemCardTitle'>{name}</h5>
            </div>

            <div className='row'>
                <Link to={`/detail/${id}`} className="centrar"><img src={img} alt={`miniatura de ${img}`} className="itemCardImg" /></Link>
            </div>

            <div className='itemCardBody'>
                <div className='row'>
                    <p className='centrar mt-2'><strong>${price}</strong></p>
                </div>

                <div className='row'>
                    <div className='col centrar'>
                        <Link to={`/detail/${id}`}><button className='btn btnSolid'>Comprar</button></Link>
                    </div>
                    <div className='col centrar'>
                        <button className="btn btnOutline"
                            onClick={verMas}>
                            {show ? 'Ver menos' : 'Ver más'}</button>
                    </div>
                    <div className='row'>
                        {show ? <p>{description}</p> : ""}
                    </div>

                    <div className='row mt-2'>
                        <small>Quedan {stock} unidades en stock</small>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Item