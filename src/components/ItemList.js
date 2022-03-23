import React, { useState, useEffect } from 'react'
import Item from './Item'

const ItemList = ({ card }) => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const productos = [
        { id: '01', name: 'Mi refugio', description: 'En algún lugar del sur argentino, este muelle es el refugio de los navegantes locales.', img: './media/Cuadros1.png' },
        { id: '02', name: 'Iluminada y eterna', description: 'Arco del triunfo, el homenaje a cientos de personas que, luchando por su país, dieron todo. Hasta su vida.', img: './media/Cuadros2.png' },
        { id: '03', name: 'Natura', description: 'Cuando dejamos de pasar todo por alto, somos capaces de ver los pequeños detalles de la vida, como a este amiguito.', img: './media/Cuadros3.png' },
        { id: '04', name: 'Imponencia', description: 'Las sierras cordobesas nunca dejan de sorprender. Y lo maravilloso de sentirse pequeño ante tal magnitud, uf, inexplicable.', img: './media/Cuadros4.png' },
        { id: '05', name: 'Lo efímero', description: 'Un atardecer en la playa es de las cosas más fuertes, fugaces e increíbles del mundo.', img: './media/Cuadros5.png' },
    ]

    const obtenerProductos = new Promise((resolve, reject) => {
        let condition = true
        if (condition) {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        } else {
            reject('Salió mal')
        }
    });

    console.log(obtenerProductos)

    useEffect(() => {
        obtenerProductos
            .then((resp) => setListaProductos(resp))
            .catch((error) => console.log (error))
            .finally(()=> setCargando(false))
    }, [])

    return (
        <div>
            <h3>Cuadros</h3>
            {cargando ? <p>Cargando...</p> : listaProductos.map((producto) => <Item producto={producto} key={producto.id}/>)}
        </div>
    )

};

export default ItemList