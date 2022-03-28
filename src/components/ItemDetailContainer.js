import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ({miid}) => {
    return (
        <div>
            <h2>Detalles</h2>
            <ItemDetail detid={miid}/>
        </div>
    )
};

export default ItemDetailContainer