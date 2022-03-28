import React, { useState, useEffect } from 'react'


const ItemDetail = ({detid}) => {
    const [detalleProductos, setDetalleProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const detalles = [
        { id: '01', nombre: 'Mi refugio', longDescription: 'Cuadro vertical de 43 x 53. El marco puede ser de color negro, natural o blanco.', img: './media/Cuadros1.png', stock: "4", price: "1200" },
        { id: '02', nombre: 'Iluminada y eterna', longDescription: 'Arco del triunfo, el homenaje a cientos de personas que, luchando por su país, dieron todo. Hasta su vida.', img: './media/Cuadros2.png', stock: "5", price: "2000" },
        { id: '03', nombre: 'Natura', longDescription: 'Cuando dejamos de pasar todo por alto, somos capaces de ver los pequeños detalles de la vida, como a este amiguito.', img: './media/Cuadros3.png', stock: "3", price: "680" },
        { id: '04', nombre: 'Imponencia', longDescription: 'Las sierras cordobesas nunca dejan de sorprender. Y lo maravilloso de sentirse pequeño ante tal magnitud, uf, inexplicable.', img: './media/Cuadros4.png', stock: "4", price: "960" },
        { id: '05', nombre: 'Lo efímero', longDescription: 'Un atardecer en la playa es de las cosas más fuertes, fugaces e increíbles del mundo.', img: './media/Cuadros5.png', stock: "8", price: "1500" }
    ]

    const getItem = new Promise((resolve, reject) => {
        let condition = true
        if (condition) {
            console.log("Detalle ID:" + detid);
            setTimeout(() => {
                let miProducto = detalles.find(elem => elem.id === detid)
                console.log(miProducto);
                resolve(miProducto);
            }, 2000);

        } else {
            reject('Salió mal')
        }
    });
    console.log(getItem)

    useEffect(() => {
        getItem
            .then((resp) => setDetalleProductos(resp))
            .catch((error) => console.log(error))
            .finally(() => setCargando(false))
    }, [])

    if (cargando) {
        return (
            <div>
                <p>Cargando...</p>

            </div>
        )

    } else {
        return (
            <div>
                <p> Descripción: {detalleProductos.longDescription}</p>
                <p> Precio: ${detalleProductos.price}</p>
                <p> Quedan {detalleProductos.stock} unidades en stock</p>
            </div>
        )

    }
};

export default ItemDetail