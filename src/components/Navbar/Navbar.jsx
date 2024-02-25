import logom4 from "../../assets/images/logom4.png";


function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <a href="index.html"><img className="logoNavbar" src={logom4} alt="Logo"/> </a>
        <ul className="menu">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Carrito <span className="material-symbols-outlined">shopping_cart</span></a></li>
          <li><a href="#">Contacto</a></li>
        </ul>

        <ul className="menuMobile">
          <li><a href="#"><span className="material-symbols-outlined">menu</span></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

