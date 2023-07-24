import React, { useState } from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Counter = ({ initialValue, stock, id }) => {
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
        Swal.fire({
            confirmButtonColor: '#ff1f75',
            title: "Haz agregado un articulo al carrito!",
           })



    }

    return (
        <>
        <div>
            <button className="count" onClick={() => setQuantity(quantity >1 ? quantity - 1 : quantity)}>-</button>
            <span>{quantity}</span>
            <button className="count" onClick={() => setQuantity(quantity === stock ? quantity  : quantity + 1)}>+</button>
        </div>
        <button className="cta" onClick={onClickAddProduct}><span>Agregar</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg></button>
        <Link to="/" className="cta"><span>Volver</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg></Link>
        </>
    );
};

export default Counter;
