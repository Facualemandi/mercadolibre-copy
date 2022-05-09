import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import '../Styles/Categories.css';

const Categories = () => {
  return (
    <>
      <ul className="ul_categories">
        <li>
          Categorias
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>Oferta</li>
        <li>Historial</li>
        <li>Supermercado</li>
        <li>Moda</li>
        <li>Vender</li>
        <li>Ayuda</li>
      </ul>

      <p className="localidad">
        <FontAwesomeIcon className="cba_location" icon={faLocationDot} />
        Cordoba Capital...
      </p>
    </>
  );
};

export default Categories;
