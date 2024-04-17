import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from "../CartContext";
import Swal from 'sweetalert2';

const CheckOut = () => {
  const location = useLocation();
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [cardSecurityCode, setCardSecurityCode] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const totalPrice = parseInt(searchParams.get('totalPrice'));
    setTotalPrice(totalPrice);
  }, [location.search]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productsFromUrl = [];
    cart.forEach(item => {
      const productId = item.id;
      const quantity = parseInt(searchParams.get(`product${productId}`));
      if (!isNaN(quantity) && quantity > 0) {
        productsFromUrl.push({ ...item, quantity });
      }
    });
    setProducts(productsFromUrl);
  }, [location.search, cart]);

  const resetForm = () => {
    setClientName('');
    setClientAddress('');
    setClientEmail('');
    setCardNumber('');
    setCardExpiration('');
    setCardSecurityCode('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: '¡Compra realizada con éxito!',
      text: `Gracias por tu compra. Has pagado un total de $${totalPrice.toFixed(2)}.`,
      icon: 'success',
    }).then(() => {
      clearCart(); // Vaciamos el carrito
      resetForm();
      navigate('/'); // Redirigimos al usuario a la página de inicio después de la compra
    });
  };

  const handleExpirationChange = (event) => {
    const formattedValue = formatExpirationDate(event.target.value);
    setCardExpiration(formattedValue);
  };

  const handleSecurityCodeChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const truncatedValue = value.substring(0, 3);
    setCardSecurityCode(truncatedValue);
  };

  const formatExpirationDate = (input) => {
    const formattedInput = input.replace(/\D/g, '').substring(0, 6);
    const parts = [];
    for (let i = 0; i < formattedInput.length; i += 2) {
      parts.push(formattedInput.substring(i, i + 2));
    }
    return parts.join('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-black uppercase mb-8">Checkout</h1>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/4 px-4 mb-8">
          <h2 className="text-xl font-semibold mb-3">Resumen del Pedido</h2>
          <div>
            <h2 className="text-xl font-semibold mb-3">Precio Total</h2>
            <p>${totalPrice}</p>
          </div>
          <ul>
            {products.map((product, index) => (
              <li key={index} className="mb-4">
                <p className="font-semibold">{product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio Total: ${product.price * product.quantity}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-3/4 px-4">
          <form onSubmit={handleFormSubmit} className="bg-gray-100 rounded-md p-6">
            <h2 className="text-xl font-semibold mb-6">Información del Cliente</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Nombre</label>
                <input type="text" id="name" name="name" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={clientName} onChange={(e) => setClientName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-1">Dirección</label>
                <input type="text" id="address" name="address" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-6 mt-8">Información de la Tarjeta</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-1">Número de Tarjeta</label>
                <input type="text" id="cardNumber" name="cardNumber" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </div>
              <div>
                <label htmlFor="expiration" className="block text-gray-700 font-semibold mb-1">Fecha de Expiración (MM/YY)</label>
                <input type="text" id="expiration" name="expiration" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={cardExpiration} onChange={handleExpirationChange} />
              </div>
              <div>
                <label htmlFor="securityCode" className="block text-gray-700 font-semibold mb-1">Código de Seguridad</label>
                <input type="text" id="securityCode" name="securityCode" className="border-gray-300 border rounded-md px-3 py-2 w-full" required maxLength="3" value={cardSecurityCode} onChange={handleSecurityCodeChange} />
              </div>
            </div>

            <button type="submit" className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md">
              Pagar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
