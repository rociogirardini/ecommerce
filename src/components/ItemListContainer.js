import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'
import CategoryNavbar from "./CategoryNavbar";
import { stock } from "./data/stock";
import Cargando from "./Loading";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {
        const pedirDatos = new Promise((resolve, reject) => {
            setTimeout(() => resolve(stock), 2000);
        });
        setCargando(true);

        pedirDatos.then((resp) => {
            if (categoryId) {
                setProductos(resp.filter((el) => el.category === categoryId))
            } else {
                setProductos(resp)
            }
        })
            .catch((error) => console.log(error))
            .finally(() => setCargando(false))
    }, [categoryId])

    return (
        <>
            <CategoryNavbar />
            {
                cargando
                    ? < Cargando />
                    : <ItemList productos={productos} />
            }
        </>
    )
}
export default ItemListContainer;