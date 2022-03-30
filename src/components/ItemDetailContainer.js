import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { stock } from "./data/stock";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const pedirDatos = new Promise((resolve, reject) => {
            setTimeout(() => resolve(stock), 1000);
        });
        setCargando(true);

        pedirDatos.then((res) => {
                setItem(res.find((producto) => producto.id === Number(id)))
            })
            .finally(() => {
                setCargando(false)
            })
    }, [id])


    return (
        <div className='container my-5'>
            {
                cargando
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item} />
            }
        </div>
    )
};

export default ItemDetailContainer