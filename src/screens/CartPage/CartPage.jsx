import React, { useState } from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import { ProductCartCard } from "../../Components";
import Swal from "sweetalert2";
import "./CartPage.css";

const CartPage = () => {
  const { cart, getTotal, clearCart } = useCustomContext();
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  const onclickPagar = () => {
    Swal.fire({
      text: "Haz realizado tu compra ;)",
      confirmButtonColor: "#ff1f75",
    });
    clearCart();
    setCartIsEmpty(true);
  };

  return (
    <>
      <div className="titleCarrito">
        <h3>Carrito</h3>
      </div>
      <div>
        {cart.length > 0 ? (
          <div className="la">
            <div className="containerCart">
              {cart.map((product) => (
                <ProductCartCard key={product.id} producto={product} />
              ))}
            </div>

            <div className="total">
              <div>
                <span>Total: $</span>
                {getTotal()}
              </div>
              <div>
                <button className="cta" onClick={onclickPagar}>
                  <span>Comprar</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h1>Todavía no hay nada en tu carrito</h1>
        )}
      </div>
    </>
  );
};

export default CartPage;
