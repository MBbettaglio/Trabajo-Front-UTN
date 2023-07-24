import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import "./detailPage.css";
import { Counter } from "../../Components";

const DetailPage = () => {
  const { id } = useParams();

  const { getProductById, addProductCart, isInCart, getProductCartById } =
    useCustomContext();

  const [productDetail, setProductDetail] = useState(
    isInCart(id) ? getProductCartById(id) : getProductById(id)
  );

  return (
    <div className="titleDitail">
      <h1>{productDetail.nombre}</h1>

      <div className="ditail">
        <div className="conteinerDitail">
          <img
            className="imgProducto"
            src={productDetail.imagen}
            alt="Figura"
          />
          <h2>${productDetail.precio}</h2>
        </div>

        <div className="counter">
          <div className="descripcion">
            <h3>
              Descripcion:
              <br />
            </h3>
            <h4>{productDetail.descripcion}</h4>
            <h3>Material:</h3>
            <h4>{productDetail.material}</h4>
            <h3>Tamaño: </h3>

            <h4>{productDetail.tamaño}</h4>
          </div>

          {isInCart(id) ? (
            <Counter
              initialValue={productDetail.quantity}
              stock={productDetail.stock}
              id={productDetail.id}
            />
          ) : (
            <Counter
              initialValue={1}
              stock={productDetail.stock}
              id={productDetail.id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
