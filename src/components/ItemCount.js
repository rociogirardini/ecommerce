const ItemCount = ({ item, cantidad, setCantidad, stock, onAdd }) => {

    const handleSumar = () => {
        if (cantidad < stock && setCantidad) {
            setCantidad(cantidad + 1)
        }
    }
    const handleRestar = () => {
        if (cantidad > 0 && setCantidad) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div>
            <div className='photoSpace'>
                <p>{item}</p>
            </div>
            <div>
                <div className="countSpace">
                    <button className="btn btn-primary" onClick={handleRestar}>-</button>
                    <p>{cantidad}</p>
                    <button className="btn btn-primary" onClick={handleSumar}>+</button>
                </div>
                <div className="btn__agregarCarrito">
                    <button className='btn btn-outline-primary' onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;