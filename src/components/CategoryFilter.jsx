import { useState } from 'react';

const CategoryFilter = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    onCategoryChange(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Categoría</h2>
      <select
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="">Todos</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
