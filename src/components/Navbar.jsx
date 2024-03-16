import logom4 from "../assets/images/logom4.png";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 



function Navbar() {
  return (
    <header>
      <nav className="navbar bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/"><img className="logoNavbar w-16" src={logom4} alt="Logo"/></Link>
          <ul className="menu flex space-x-4 ml-4">
            <li><Link to="/" className="hover:text-gray-300">Inicio</Link></li>
            <li><Link to="/productos" className="hover:text-gray-300">Productos</Link></li>
            <li><Link to="/contacto" className="hover:text-gray-300">Contacto</Link></li>
          </ul>
        </div>
        <CartWidget/>
      </nav>
    </header>
  );
}

export default Navbar;
