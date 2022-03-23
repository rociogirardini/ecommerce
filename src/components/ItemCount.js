import { useState } from 'react';
const ItemCount = ({item, initial, stock}) => {
    const [contador, setContador] = useState(initial)
    const sumar = () =>{
        if(contador < stock){
            setContador (contador + 1)
        }
    }
    const restar = () =>{
        if (contador > 0){
            setContador (contador - 1)
        }
    }
    const onAdd = () => {
        console.log('Agregué al carrito')
    }
    return (
        <div>
            <div className='photoSpace'>
            <p>{item}</p>
            </div>
            <div className="countSpace">
                <button className="btn btn-primary" onClick={restar}>-</button>
                <p>{contador}</p>
                <button className="btn btn-primary" onClick={sumar}>+</button>
            </div>
            <div className="btn__agregarCarrito">
            <button className='btn btn-outline-primary' onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;