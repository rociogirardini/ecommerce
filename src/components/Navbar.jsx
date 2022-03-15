import logoTRF from '../logoTRF.png';
import CartWidget from './CartWidget';
const Navbar = () => {
    return (
        <nav className="barraNavbar navbar-dark bg-dark">
            <div className="espacioNavbarLogo col-md-1">
            <img className="logo" src={logoTRF}/>
            </div>
            <div className="espacioNavbarItems col-md-10">
                <ul className="espacioNavbarLinks">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Sobre mí</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
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