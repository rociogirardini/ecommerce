const ItemListContainer = ({ nombre, titulo}) => {
    return (
        <div>
            <h1 className="greeting">¡Hola {nombre}! Entraste a mi tienda en línea</h1>
            <h2 className="greeting">{titulo}</h2>
        </div>
    )
}
export default ItemListContainer;