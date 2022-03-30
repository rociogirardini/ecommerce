import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CartWidget = () => {
    return (
        <div>
            <span><Link to="/cart"><FaShoppingCart color="white" /></Link></span>
        </div>
    )
}

export default CartWidget;