
import { Footer } from "../../Components";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import "./HomePage.css";

const HomePage = () => {
  const { products } = useCustomContext();
  return (
    <div className="homePage">
      <h1>TableTops</h1>
      <hr />

      <section className="backgroundImg">
        <div className="productCard">
          {products.map((producto) => (
            <ProductCard producto={producto} key={producto.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
