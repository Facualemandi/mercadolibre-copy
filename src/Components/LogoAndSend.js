import React from "react";
import logo from "../Images/logo-mercado-libre.png";
import LogoMc from '../Images/logoMc.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import '../Styles/LogoAndSend.css'

const LogoAndSend = () => {
  return (
    <>
      <section className="sectionLogoAndSend">

      <img className="logo" alt="Mercado Libre" src={logo} />
      <img className="logoHands" alt="Mercado Libre" src={LogoMc} />

<div className="iconLocationAndSend">
        <FontAwesomeIcon
          className="iconLocation"
          icon={faLocationDot}
        ></FontAwesomeIcon>
        <div className="send">
          <p>Enviar a</p>
          <p>Capital Federal</p>
        </div>
</div>
       </section>


    </>
  );
};

export default LogoAndSend;
