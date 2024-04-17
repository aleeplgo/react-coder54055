import { useState } from 'react';
import { useProductContext } from '../ProductContext';

const CategoryFilter = () => {
  const { products, setFilteredProducts } = useProductContext();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === '') {
   
      setFilteredProducts(products); // Mostrar todos los productos si no se selecciona ninguna categoría
      console.log(category);
      console.log(products);
    } else {
      const filteredProducts = products.filter(product => product.category === category);
      setFilteredProducts(filteredProducts);
      console.log(filteredProducts);
      console.log((setFilteredProducts(filteredProducts)));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Categoría</h2>
      <select
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option key="todos" value="">Todos</option>
        {/* Utiliza un conjunto de categorías únicas para evitar duplicados */}
        {Array.from(new Set(products.map(product => product.category))).map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
