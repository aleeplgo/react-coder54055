import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckOut = () => {
  const location = useLocation();
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
    const products = [];
    let totalPrice = 0;
    for (const [key, value] of searchParams.entries()) {
      if (key.startsWith('product')) {
        const productId = key.split('=')[1];
        const quantity = parseInt(value);
        products.push({ id: productId, quantity });
        totalPrice += quantity * 10;
      }
    }
    setProducts(products);
    setTotalPrice(totalPrice);
  }, [location.search]);

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
    const formData = {
      clientName,
      clientAddress,
      clientEmail,
      cardNumber,
      cardExpiration,
      cardSecurityCode
    };
    console.log(formData);
    Swal.fire({
      title: '¡Compra realizada con éxito!',
      text: 'Gracias por tu compra',
      icon: 'success',
    }).then(() => {
      resetForm();
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
    <div className="w-2/3 mx-auto">
      <h1 className="text-3xl m-5 font-black uppercase text-center">Checkout</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-3">Productos en el Carrito</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              Producto ID: {product.id}, Cantidad: {product.quantity}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Precio Total</h2>
        <p>${totalPrice}</p>
      </div>

      <form onSubmit={handleFormSubmit}>
        <h2 className="text-xl font-semibold mb-3">Información del Cliente</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Nombre</label>
          <input type="text" id="name" name="name" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-1">Dirección</label>
          <input type="text" id="address" name="address" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Correo Electrónico</label>
          <input type="email" id="email" name="email" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
        </div>

        <h2 className="text-xl font-semibold mb-3">Información de la Tarjeta</h2>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-1">Número de Tarjeta</label>
          <input type="text" id="cardNumber" name="cardNumber" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 mr-2">
            <label htmlFor="expiration" className="block text-gray-700 font-semibold mb-1">Fecha de Expiración (MM/YY)</label>
            <input type="text" id="expiration" name="expiration" className="border-gray-300 border rounded-md px-3 py-2 w-full" required value={cardExpiration} onChange={handleExpirationChange} />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="securityCode" className="block text-gray-700 font-semibold mb-1">Código de Seguridad</label>
            <input type="text" id="securityCode" name="securityCode" className="border-gray-300 border rounded-md px-3 py-2 w-full" required maxLength="3" value={cardSecurityCode} onChange={handleSecurityCodeChange} />
          </div>
        </div>

        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md mr-2">
          Pagar
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
