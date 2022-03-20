import { useState } from 'react';
function ItemCount() {
    const [contador, setContador] = useState(0);
    return (
        <div>
            <div className="countSpace">
                <button className="btn btn-primary" onClick={() => setContador(contador - 1)}>-</button>
                <p>{contador}</p>
                <button className="btn btn-primary" onClick={() => setContador(contador + 1)}>+</button>
            </div>
            <div className="btn__agregarCarrito">
            <button className='btn btn-outline-primary'>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;