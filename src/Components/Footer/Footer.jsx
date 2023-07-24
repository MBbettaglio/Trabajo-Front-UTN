import React from "react";
import "./footer.css";
import Logo from "../../assets/d10.svg";
import ImagenCentro from "../../assets/goblin.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Master from "../../assets/master.svg";
import Visa from "../../assets/visa.svg";
import Paypal from "../../assets/paypal.svg";
import Instagram from "../../assets/instagram.svg";
import Qr from "../../assets/qr.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/541170278658?text=Contactanos!`, "_blank");
  };
  const handleInstagramClick = () => {
    window.open(
      `https://instagram.com/candytabletop?igshid=MzNlNGNkZWQ4Mg==`,
      "_blank"
    );
  };
  return (
    <>
      <footer>
        <div className="leftContainer">
          <div className="logoDos">
            <img src={Logo} alt="LogoDado" />
            <h2>Candy Tabletop</h2>
            
          </div>
          <img className="qr" src={Qr} alt="QrDeInstagram" />
          <div className="derechos">
            
            <p> ® Todos los derechos reservados</p>
          </div>
        </div>
        <div className="conteinerCenter">
          <div className="center">
            <img className="goblin" src={ImagenCentro} alt="Imagen de Goblin" />
            <div className="textCenter">
              <p>
                {" "}
                Realizamos impresiones 3D.
                <br />
                Trae tus diseños y lo hacemos posible.
                <br />
                <br />
                <span>¡Escribinos!</span>
              </p>
              <Link to="#" onClick={handleWhatsAppClick}>
                <img
                  className="whatsapp"
                  src={Whatsapp}
                  alt="Icono de whatsapp"
                />
              </Link>
            </div>
          </div>
          <div className="comentarios">
            <p>
              Dejanos tus comentarios!
              <br />
              <span className="cont">
                <Link to="/contact">Contacto</Link>
              </span>
              <br />
            </p>
          </div>
          <div className="pagos">
            <h3>Formas de pago:</h3>
            <div className="pagosIconos">
              <img src={Paypal} alt="Paypal" />
              <img src={Visa} alt="Visa" />
              <img src={Master} alt="MasterCard" />
            </div>
          </div>
        </div>
        <div className="redes">
          <h2>¡Seguinos!</h2>
          <Link to="#" onClick={handleInstagramClick} href="">
            <img className="instagram" src={Instagram} alt="Instagram" />
          </Link>
        </div>

        <div className="derechosMovile">
          <p> ® Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
