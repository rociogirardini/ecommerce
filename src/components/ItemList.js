import Item from './Item'

const ItemList = ({productos}) => {

    return (
        <div>
            <h2 className='d-flex justify-content-center m-2'>Cuadros</h2>
            <div className="row g-0 card-deck justify-content-center">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </div>
    )

};

export default ItemList