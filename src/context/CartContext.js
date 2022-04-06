import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart([...cart, item])

        /* setCart(cart.filter((prod) => prod.id !== item.id)) */

        /* let existe = (cart.filter((prod) => prod.id === item.id))
         if (!existe) {
             setCart[cart.indexOf(existe[0])].cantidad = item.cantidad
         } else {
             setCart([...cart, item])
         } */
    }

    const isInCart = (id) => {
        return cart.some(prop => prop.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.cantidad, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }


    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext