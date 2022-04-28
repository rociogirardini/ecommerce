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
                        <Link to="/" href="/" className={window.location.pathname==="/" ? "active" : ""}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/sobre-mi" href="sobre-mi" className={window.location.pathname==="sobre-mi" ? "active" : ""}>Sobre mí</Link>
                    </li>
                    <li>
                        <Link to="/productos">Tienda</Link>
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