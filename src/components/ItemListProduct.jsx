import { ProductProvider } from "../ProductContext"; 
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
