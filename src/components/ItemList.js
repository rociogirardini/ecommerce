import Item from './Item'

const ItemList = ({ productos }) => {

    return (
        <div>
            <div className='itemList container row'>
                <h1 className='itemListTitle'>PRODUCTOS</h1>
                <h2 className='itemListSubtitle '>CUADROS</h2>
            </div>
            <div className="row g-0 card-deck justify-content-center">
                {productos.map((el) => <Item key={el.id} {...el} />)}
            </div>
        </div>
    )

};

export default ItemList