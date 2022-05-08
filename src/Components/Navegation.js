import React from "react";
import Search from "./Search";
import DisneyPromo from "./DisneyPromo";
import "../Styles/Navegation.css";
import logo from "../Images/logo-mercado-libre.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Navegation = () => {
  return (
    <>
      <nav className="navegation">
        <section className="section_container">
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

        <section>
          <Search />
        </section>

        <section>
          <DisneyPromo />
        </section>
      </nav>
    </>
  );
};

export default Navegation;
