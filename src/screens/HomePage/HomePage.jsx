import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import "./HomePage.css";

const HomePage = () => {
  const { products } = useCustomContext();
  const [searchProduct, setSearchProduct] = useState("");
  const [currentProducts, setCurrentProducts] = useState(products);

  useEffect(() => {
    setCurrentProducts(
      products.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchProduct.toLowerCase())
      )
    );
  }, [searchProduct]);
  return (
    <>
      {" "}
      <div className="titleHome">
        {" "}
        <h1>TableTops</h1>
        <input
          className="search"
          placeholder="Buscar Mini ..."
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
      </div>
      <div className="homePage">
        <hr />

        <section className="backgroundImg">
          {currentProducts.length === 0 ? (
            <div className="nonProducts">
              {" "}
              <h1>No encontré lo que buscabas =(</h1>
            </div>
          ) : (
            <div className="productCard">
              {currentProducts.map((producto) => (
                <ProductCard producto={producto} key={producto.id} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default HomePage;
