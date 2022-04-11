import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import Cargando from './Loading';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setCargando(true)

        const docRef = doc(db, "productos", id)
        getDoc(docRef)
            .then(doc => {
                setItem( {id: doc.id, ...doc.data()} )
            })
            .finally(() => {
                setCargando(false)
            })

    }, [id])


    return (
        <div className='container my-5'>
            {
                cargando
                    ? < Cargando />
                    : <ItemDetail {...item} />
            }
        </div>)
};

export default ItemDetailContainer