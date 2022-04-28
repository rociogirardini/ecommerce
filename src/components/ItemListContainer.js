import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import CategoryNavbar from "./CategoryNavbar";
import Cargando from "./Loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {
        setCargando(true);

        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef
        getDocs(q)
            .then(resp => {
                const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setProductos(items)
            })
            .finally(() => {
                setCargando(false)
            })
    }, [categoryId])

    return (
        <div>
            <CategoryNavbar />
            {
                cargando
                    ? <Cargando />
                    : <ItemList productos={productos} />
            }
        </div>
    )
}
export default ItemListContainer;