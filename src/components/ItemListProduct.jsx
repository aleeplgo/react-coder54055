import { ProductProvider } from "../contexts/ProductContext"; 
import ItemProduct from "./ItemProduct";

function ItemListProduct() {
  return (
    <>
      <ProductProvider>
        <ItemProduct />
      </ProductProvider>
    </>
  );
}

export default ItemListProduct;
