import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import auri1 from '../Images/auriculares1.png'
import auri2 from '../Images/auriculares2.png'
import auri3 from '../Images/auriculares3.png'

import '../Styles/Sproducts.css'

const SProducts = ({onBlack}) => {
  return (
    <>
    <section className={`${onBlack && 'TotalContainer_Products'}`}>

      <p className={`cheap ${onBlack && 'is-active'}`}> Productos Similares más baratos </p> 

    <section className="Products_section_container">

      <section className="section_auri">
        <img className="headphones" src={auri1} alt="Headphones Sony"/>
        <div className="products_description">
          <p>Auriculares in-ear inalambricos Sony </p>
          <span className="price">$29.999</span>
          <span className="free">Envío gratis  <FontAwesomeIcon icon={faBoltLightning}/>FULL</span>
        </div>
      </section>

      <section className="section_auri">
        <img className="headphones"  src={auri2} alt='Headphones Apple'/>
        <div className="products_description">
          <p>Apple AirPods (3°A Generación )</p>
          <span className="price">$35.200</span>
          <span className="free">Envío gratis</span>
        </div>
      </section>

      <section className="section_auri">
        <img className="headphones"  src={auri3} alt='Headphones Samsung'/>
        <div className="products_description">
          <p>Auriculares in-ear Inalámbricos Samsung</p>
          <span className="price">$28.855</span>
          <span className="free">Envío gratis</span>
        </div>
      </section>

</section>

    </section>

    </>
  );
};

export default SProducts;
