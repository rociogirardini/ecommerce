import React,{useState} from 'react'
import ItemCount from './ItemCount'

const Item = ({producto}) => {
    const {name, description, img} = producto

    const [show, setShow] = useState(false)
    const verMas = () => {
        setShow(!show)
        };
    return(
        <div className='card' style={{width: '18rem'}}>
            <img src={img}/>
            <div className='card-body'>
                <p className='card-text'>{name}</p>
                <button className="btn btn-info" onClick={verMas}>{show ? 'Ver menos' : 'Ver más'}</button>
                {show ? <p>{description}</p> : ""}
                <ItemCount initial={0} stock={4}/>
            </div>
        </div>
    )
}

export default Item