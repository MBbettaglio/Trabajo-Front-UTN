import React from 'react'

const ProductCartCard = ({producto}) => {
  return (
    <div className='conteinerCartCard'>
    <h2>{producto.nombre}</h2>
    <img className="imgProducto" src={producto.imagen} alt="Figura" />
    <h3>${producto.precio}</h3>
    <p>Cantidad: {producto.quantity}</p>
    <hr />
  </div>
  )
}

export default ProductCartCard