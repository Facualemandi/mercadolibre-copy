import React from "react";
import '../Styles/Entrega.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const Entrega = () => {
  return (
    <>
      <section className="container_free">
        <section className="envioGratis">
          <FontAwesomeIcon className="faCarSide" icon={faCarSide} />
          <div>
            <p> Llegara gratis mañana </p>
            <a href="#"> Ver más formas de entrga</a>
          </div>
        </section>

        <section className="devolucionGratis">
            <FontAwesomeIcon className="faLeftLong" icon={faLeftLong}/>
            <div className="totalDevoluciones">
               <p> Devolución de 30 días </p>
               <span className="devolucion"> Tenés 30 días desde que lo recibís </span>
               <a href="#"> Conoce más</a>
            </div>
        </section>
      </section>
    </>
  );
};

export default Entrega;
