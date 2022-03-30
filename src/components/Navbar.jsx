import logoTRF from '../logoTRF.png';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="barraNavbar navbar-dark bg-dark">
            <div className="espacioNavbarLogo col-md-1">
            <Link to="/"><img className="logo" src={logoTRF} alt="logo TRF"/></Link>
            </div>
            <div className="espacioNavbarItems col-md-10">
                <ul className="espacioNavbarLinks">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/sobre-mi">Sobre mí</Link>
                    </li>
                    <li>
                        <Link to="#">Productos</Link>
                    </li>
                </ul>
            </div>
            <div className="espacioNavbarCarrito col-md-1">
                <CartWidget />
            </div>
        </nav>
    )
}
export default Navbar;