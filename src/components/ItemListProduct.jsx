import ItemProduct from "./ItemProduct";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";


function ItemListProduct() {
  const { products } = useContext(ProductContext);

  return (
    <>
      {products.map((product) => (
        <ItemProduct key={product.id} product={product} />
      ))}
    </>
  );
}

export default ItemListProduct;
