import ItemListProduct from '../components/ItemListProduct';
import PriceFilter from '../components/PriceFilter';
import CategoryFilter from '../components/CategoryFilter';
import { useProductContext } from '../ProductContext';

const Products = () => {
  const { loading, products, filteredProducts, setFilteredProducts } = useProductContext();

  const handlePriceChange = (priceRange) => {
    const filtered = products.filter(product => {
      return (priceRange.min === '' || product.price >= parseFloat(priceRange.min)) &&
             (priceRange.max === '' || product.price <= parseFloat(priceRange.max));
    });
    setFilteredProducts(filtered);
  };
  
  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-1/4 p-4">
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <PriceFilter onPriceChange={handlePriceChange} />
          <CategoryFilter onCategoryChange={handleCategoryChange} />
        </div>
      </aside>
      <div className="w-full md:w-3/4 p-4">
        <h1 className="text-3xl font-black uppercase mb-5">Productos</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ItemListProduct products={filteredProducts} />
        )}
      </div>
    </div>
  );
};

export default Products;
