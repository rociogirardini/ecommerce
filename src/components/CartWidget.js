import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <div>
            <Link to="/cart">
                <div>
                    <FaShoppingCart color="white" />
                    <span className='cartQuantity'> {cartQuantity()}</span>
                </div>
            </Link>
        </div>
    )
}

export default CartWidget;