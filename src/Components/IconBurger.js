import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "../Styles/IconBurger.css";

const IconBurger = ({ changeOnBlack, openMenu }) => {
  return (
    <section className="section_icon_burger">
      <FontAwesomeIcon
        icon={faBars}
        className="icon_burger_open"
        onClick={openMenu}
      />

      <FontAwesomeIcon
        className="icon_moon_open"
        icon={faMoon}
        onClick={changeOnBlack}
      />
    </section>
  );
};

export default IconBurger;
