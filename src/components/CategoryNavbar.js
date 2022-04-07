import {Link} from 'react-router-dom';

const CategoryNavbar = () => {
    return (
        <nav className="navbar-light bg-light">
            <div className="espacioNavbarItems col-md-12">
                <ul className="categoryLinks">
                    <li>
                        <Link to="/category/paisajes">Paisajes</Link>
                    </li>
                    <li>
                        <Link to="/category/ciudades">Ciudades</Link>
                    </li>
                    <li>
                        <Link to="/category/animales">Animales</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default CategoryNavbar