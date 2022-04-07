import logoTRF from '../logoTRF.png';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="generalNavbar">
            <div className="espacioNavbarLogo col-md-2">
            <Link to="/"><img className="logo" src={logoTRF} alt="logo TRF"/></Link>
            </div>
            <div className="espacioNavbarItems col-md-8">
                <ul className="espacioNavbarLinks">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/sobre-mi">Sobre mí</Link>
                    </li>
                    <li>
                        <Link to="/">Productos</Link>
                    </li>
                </ul>
            </div>
            <div className="espacioNavbarCarrito col-md-2">
                <CartWidget />
            </div>
        </nav>
    )
}
export default Navbar;