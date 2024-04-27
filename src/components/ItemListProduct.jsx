import { useContext, useEffect } from "react";
import { ProductContext } from "../ProductContext";
import ItemProduct from "./ItemProduct";

function ItemListProduct() {
  const { products, loading, fetchData } = useContext(ProductContext);

  useEffect(() => {
    // Llamada a fetchData al montar el componente
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ItemProduct key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemListProduct;
