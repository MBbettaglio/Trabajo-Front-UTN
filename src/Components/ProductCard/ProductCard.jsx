import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ producto }) => {
  return (
    <div className="conteinerCard">
      <div className="conteinerImg">
        <img className="imgProducto" src={producto.imagen} alt="Figura" />
      </div>
      <h2>{producto.nombre}</h2>
      <h3>${producto.precio}</h3>
      <hr />
      <Link to={'/detail/' + producto.id}className="cta">
        <span>DETALLES</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </Link>
      
    </div>
  );
};

export default ProductCard;
