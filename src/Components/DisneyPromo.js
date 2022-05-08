import React from "react";
import MyPerfil from "./MyPerfil";
import PromoDisney from "../Images/promodisneysub.png";
import "../Styles/DisneyPromo.css";

const DisneyPromo = () => {
  return (
    <>
      <section>
        <img className="disneypromo" alt="Disney" src={PromoDisney} />
        <MyPerfil />
      </section>
    </>
  );
};

export default DisneyPromo;
