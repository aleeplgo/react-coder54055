import { useState } from 'react';
import { useProductContext } from '../ProductContext';

const PriceFilter = () => {
  const { setFilteredProducts } = useProductContext();
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPriceRange({ ...priceRange, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFilteredProducts(prevProducts => {
      return prevProducts.filter(product => {
        return (
          (priceRange.min === '' || product.price >= parseFloat(priceRange.min)) &&
          (priceRange.max === '' || product.price <= parseFloat(priceRange.max))
        );
      });
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Precio</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="min"
          placeholder="Mínimo"
          value={priceRange.min}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        />
        <input
          type="number"
          name="max"
          placeholder="Máximo"
          value={priceRange.max}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md w-full"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
};

export default PriceFilter;
