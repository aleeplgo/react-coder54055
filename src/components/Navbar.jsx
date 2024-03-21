import logom4 from "../assets/images/logom4.png";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 



function Navbar({ categories }) {
   // Verifica si categories es un array antes de usar map
   if (!Array.isArray(categories)) {
    console.error('categories no es un array:', categories);
    // Puedes retornar un valor por defecto o manejar el error de otra forma aquí
    return null; // O un mensaje de error, etc.
  }
  return (
    <header>
      <nav className="navbar bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/"><img className="logoNavbar w-16" src={logom4} alt="Logo"/></Link>
          <ul className="menu flex space-x-4 ml-4">
            <li><Link to="/" className="hover:text-gray-300">Inicio</Link></li>
            <li><Link to="/productos" className="hover:text-gray-300">Productos</Link></li>
            <li className="relative group">
              <button className=" hover:text-gray-300 focus:outline-none">Categorías</button>
              <ul className=" mt-0 w-48 absolute hidden bg-gray-800 text-white pt-1 pb-1 pl-2 pr-2 rounded-md group-hover:block">
                {categories.map((category, index) => (
                  <li key={index}><Link to={`/productos/${category}`} className="hover:text-gray-300">{category}</Link></li>
                ))}
              </ul>
            </li>
            <li><Link to="/contacto" className="hover:text-gray-300">Contacto</Link></li>
          </ul>
        </div>
        <CartWidget product={"Logo"} price={"300"} />
      </nav>
    </header>
  );
}

export default Navbar;
