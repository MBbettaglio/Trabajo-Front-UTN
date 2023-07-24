import React, { useState } from "react";
import "./ContactPage.css";
import Swal from "sweetalert2";

export const ContactPage = () => {
  const [userData, setUserData] = useState({});
  const [formUserData, setFormUserdata] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [showSend, setShowSend] = useState(false);
  const contactForm = (evento) => {
    evento.preventDefault();
    setShowSend(true);
    setUserData(formUserData);
    setFormUserdata({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };
  const contactFormChange = (evento) => {
    setFormUserdata({
      ...formUserData,
      [evento.target.name]: evento.target.value,
    });
  };
  

  return (
    <>
      <div className="conteinerContact">
        {" "}
        <div className="conteinerForm">
          <div className="titleContact">
            <h3>Contacto</h3>
          </div>
          <form className="contact" onSubmit={contactForm}>
            <label htmlFor="Nombre">
              Ingrese su nombre completo<span>*</span>
            </label>
            <input
              placeholder="Candy Tabletop"
              name="nombre"
              id="nombre"
              onChange={contactFormChange}
              value={formUserData.nombre}
              required
            />
            <label htmlFor="email">
              Ingrese su mail<span>*</span>
            </label>
            <input
              type="email"
              placeholder="Candybell@gmail.com"
              name="email"
              id="email"
              onChange={contactFormChange}
              value={formUserData.email}
            />
            <label htmlFor="asunto">
              Asunto<span>*</span>
            </label>
            <input
              type="asunto"
              placeholder="Asunto"
              name="Asunto"
              id="Asunto"
              onChange={contactFormChange}
              value={formUserData.asunto}
              required
            />
            <label htmlFor="mensaje">
              Ingrese su mensaje<span>*</span>
            </label>
            <textarea
              placeholder="Hola Candy!"
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              onChange={contactFormChange}
              value={formUserData.mensaje}
              required
            ></textarea>
            <button className="cta" type="submit" >
              <span>Enviar</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {showSend && (
        <div className="mensaje">
          <h1>Nos llegó tu mensaje. Gracias! </h1>
        </div>
      )}
    </>
  );
};

export default ContactPage;
