import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const ProductCartCard = ({producto}) => {
   const { removeProductCart } = useCustomContext();

   const handleRemoveClick = () => {
    removeProductCart(producto.id);
   }

  return (
    <>
    <div className='conteinerCartCard'>
    <h2>{producto.nombre}</h2>
    <img className="imgProducto" src={producto.imagen} alt="Figura" />
    <h3>${producto.precio}</h3>
    <p>Cantidad: {producto.quantity}</p>
    <button className='btnRemove' onClick={handleRemoveClick}>Eliminar</button>
    <hr />
  </div>
  </>
  )
}

export default ProductCartCard