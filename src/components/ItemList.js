import Item from './Item'

const ItemList = ({productos}) => {

    return (
        <div>
            <h3>Cuadros</h3>
            <div className="row g-0 card-deck justify-content-center">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </div>
    )

};

export default ItemList