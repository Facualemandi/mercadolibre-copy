import React from "react";
import Search from "./Search";
import DisneyPromo from "./DisneyPromo";
import "../Styles/Navegation.css";
import LogoAndSend from "./LogoAndSend";



const Navegation = () => {
  return (
    <>
      <nav className="navegation">
        <section className="section_container">
          
          <section>
            <LogoAndSend/>
          </section>

          <section>
            <Search />
          </section>

          <section>
            <DisneyPromo />
          </section>
          
        </section>

      </nav>
    </>
  );
};

export default Navegation;
