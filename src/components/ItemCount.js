const ItemCount = ({ cantidad, setCantidad, stock, onAdd }) => {

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
            <div className="countSpace">
                <button className="btn btnSolid btn-sm" onClick={handleRestar}>-</button>
                <p className="d-flex align-items-center mt-2" style={{color:'black'}}>{cantidad}</p>
                <button className="btn btnSolid btn-sm" onClick={handleSumar}>+</button>
            </div>
            <div className="agregarCarrito">
                <button
                    className='btn btnSolid'
                    onClick={() => onAdd(cantidad)}
                    disabled={cantidad === 0 ? true : false}
                >Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;