import Item from './Item'

const ItemList = ({ productos }) => {

    return (
        <div>
            <div className='itemList container container-fluid'>
                <h1 className='itemList__title'>PRODUCTOS</h1>
                <h2 className='itemList__subtitle'>CUADROS</h2>
            </div>
            <div className="row g-0 card-deck justify-content-center">
                {productos.map((el) => <Item key={el.id} {...el} />)}
            </div>
        </div>
    )

};

export default ItemList