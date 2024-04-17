import ItemListProduct from '../components/ItemListProduct';
import PriceFilter from '../components/PriceFilter';
import CategoryFilter from '../components/CategoryFilter';
import { useProductContext } from '../ProductContext';

const Products = () => {
  const { products } = useProductContext();
  const categories = [...new Set(products.map(product => product.cathegory))];

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-1/4 p-4">
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <PriceFilter className="w-full md:w-11/12 mb-4 md:mb-0 md:mr-4" />
          <CategoryFilter className="w-full md:w-11/12" categories={categories} />
        </div>
      </aside>
      <div className="w-full md:w-3/4 p-4">
        <h1 className="text-3xl font-black uppercase mb-5">Productos</h1>
        <ItemListProduct />
      </div>
    </div>
  );
};

export default Products;
