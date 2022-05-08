import React from "react";
import logo from "../Images/logo-mercado-libre.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import '../Styles/LogoAndSend.css'

const LogoAndSend = () => {
  return (
    <>
      <section className="sectionLogoAndSend">

      <img className="logo" alt="Mercado Libre" src={logo} />

      <section className="section_fontawesome">
        <FontAwesomeIcon
          className="iconLocation"
          icon={faLocationDot}
        ></FontAwesomeIcon>
        <div className="send">
          <p>Enviar a</p>
          <p>Capital Federal</p>
        </div>
       </section>

      </section>
    </>
  );
};

export default LogoAndSend;
