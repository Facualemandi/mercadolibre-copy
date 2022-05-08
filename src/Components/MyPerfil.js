import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "../Styles/MyPerfil.css";

const MyPerfil = () => {
  return (
    <>

        <ul className="ul_Perfil">
          <li>Crea Tu Cuenta</li>
          <li>Ingresá</li>
          <li>Mis Compras</li>
          <FontAwesomeIcon className="iconCart" icon={faCartShopping} />
          <FontAwesomeIcon className="iconMoon" icon={faMoon} />
        </ul>
    </>
  );
};

export default MyPerfil;
