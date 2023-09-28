import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const products = [
    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura1.jpg?raw=true",
      nombre: "Tabernera",
      precio: 500,
      stock: 10,
      descripcion: "Tabernera inspirada en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color negra. Muestra con imprimado gris.",
      material: 'Resina Negra',
      tamaño: '35mm',
      id: 1,
    },

    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura2.jpg?raw=true",
      nombre: "Caballero",
      precio: 700,
      stock: 10,
      descripcion: "Caballero Espectral inspirado en un set del icónico juego de rol 'El señor de los anillos' / Figura impresa en alta calidad; en resina color transparente. Ideal para las tinturas.",
      material: 'Resina Incolora',
      tamaño: '40mm',
      id: 2,
    },

    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura3.jpg?raw=true",
      nombre: "Guerrera",
      precio: 550,
      stock: 10,
      descripcion: "Guerrera inspirada en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color negra. Muestra con imprimado gris.",
      material: 'Resina Negra',
      tamaño: '35mm',
      id: 3,
    },

    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura4.jpg?raw=true",
      nombre: "Sucubo",
      precio: 550,
      stock: 10,
      descripcion: "Sucubo inspirado en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color negra. Muestra con imprimado gris.",
      material: 'Resina Negra',
      tamaño: '35mm',
      id: 4,
    },

    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura5.jpg?raw=true",
      nombre: "Ranitas",
      precio: 1100,
      stock: 10,
      descripcion: "Duo de Ranitas Magas; inspirada en un set del icónico juego de rol 'Dungeons & Dragons' Figuras impresas en alta calidad; en resina color negra. Muestra con imprimado gris.",
      material: 'Resina Negra',
      tamaño: '35mm',
      id: 5,
    },

    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura6.jpg?raw=true",
      nombre: "Esqueleto",
      precio: 600,
      stock: 10,
      descripcion: "Esqueleto Espectral; inspirado en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color transparente. Ideal para las tinturas.",
      material: 'Resina Incolora',
      tamaño: '35mm',
      id: 6,
    },

    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura7.jpg?raw=true",
      nombre: "Esqueleto",
      precio: 600,
      stock: 10,
      descripcion: "Esqueleto Espectral Lancero; inspirado en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color transparente. Ideal para las tinturas.",
      material: 'Resina Incolora',
      tamaño: '35mm',
      id: 7,
    },
    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura8.jpg?raw=true",
      nombre: "Mago",
      precio: 500,
      descripcion: "Mago inspirado en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color negra. Muestra con imprimado gris.",
      material: 'Resina Negra',
      tamaño: '40mm',
      stock: 10,
      id: 8,
    },
    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura9.jpg?raw=true",
      nombre: "Lord & Bat",
      precio: 2000,
      stock: 10,
      descripcion: "Lord Vampiro con su montura Murcielago; inspirado en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color negra. Muestra con imprimado gris.",
      material: 'Resina Negra',
      tamaño: '60mm',
      id: 9,
    },
    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura10.jpg?raw=true",
      nombre: "Golum",
      precio: 700,
      stock: 10,
      descripcion: "Nuestro Golum inspirado en un set del icónico juego de rol 'El señor de los anillos' Figura impresa en alta calidad; en resina color negra. Muestra con imprimado gris.",
      material: 'Resina Negra',
      tamaño: '40mm',
      id: 10,
    },
    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura11.jpg?raw=true",
      nombre: "Elfa Driade",
      precio: 500,
      stock: 10,
      descripcion: "Driade inspirada en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color negra. Muestra con imprimado gris.",
      material: 'Resina Negra',
      tamaño: '40mm',
      id: 11,
    },
    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura13.jpg?raw=true",
      nombre: "Esqueleto",
      precio: 600,
      stock: 10,
      descripcion: "Esqueleto Espectral Lancero; inspirado en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color transparente. Ideal para las tinturas.",
      material: 'Resina Incolora',
      tamaño: '35mm',
      id: 12,
    },
    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura14.jpg?raw=true",
      nombre: "Mago S/I",
      precio: 550,
      stock: 10,
      descripcion: "Mago inspirado en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color negra. Muestra sin imprimado.",
      material: 'Resina Negra',
      tamaño: '40mm',
      id: 13,
    },
    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura15.jpg?raw=true",
      nombre: "Tabernera S/I",
      precio: 550,
      stock: 10,
      descripcion: "Tabernera inspirada en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color negra. Muestra sin imprimado.",
      material: 'Resina Negra',
      tamaño: '35mm',
      id: 14,
    },
    {
      imagen:
        "https://github.com/MBbettaglio/Tp-Carrito/blob/master/src/assets/figura16.jpg?raw=true",
      nombre: "Ranita S/I",
      precio: 450,
      stock: 10,
      descripcion: "Ranita Maga, inspirada en un set del icónico juego de rol 'Dungeons & Dragons' Figura impresa en alta calidad; en resina color negra. Muestra sin imprimado.",
      material: 'Resina Negra',
      tamaño: '40mm',
      id: 15,
    },
    
  ];

  const getProductById = (id) => {
    return products.find((productos) => productos.id === Number(id));
  };
  const getProductCartById =(id) =>{
    return cart.find((productos) => productos.id === Number(id));
  }

  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([])
  }
const removeProductCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
  }

  const isInCart = (id) => cart.some((producto) => producto.id === Number(id));

  
  const addProductCart = (id, quantity) => {
    if (isInCart(id)) {
      setCart(cart.map(product =>{
        if(product.id == id){
            product.quantity = quantity
        }
        return product
      }))
    } else {
      setCart([...cart, {...getProductById(id), quantity: quantity}]);
    }
  };

  

  const getTotal = () => {
    let total = 0
    cart.forEach(product => total += product.precio * product.quantity)
    return total
  }

  return (
    <Context.Provider
      value={{ products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal, removeProductCart, clearCart}}
    >
      {children}
    </Context.Provider>
  );
};
export const useCustomContext = () => useContext(Context);

export default ContextProvider;
