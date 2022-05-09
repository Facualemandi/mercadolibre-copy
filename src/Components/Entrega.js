import React from "react";
import '../Styles/Entrega.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const Entrega = ({onBlack}) => {
  return (
    <>
      <section className={`container_free ${onBlack && 'entregaOnBlack'} `}>
        <section className="envioGratis">
          <FontAwesomeIcon className="faCarSide" icon={faCarSide} />
          <div>
            <p> Llegara gratis mañana </p>
            <a href="#" className={`${onBlack && 'devolucionesActiv'}`}> Ver más formas de entrga</a>
          </div>
        </section>

        <section className="devolucionGratis">
            <FontAwesomeIcon className="faLeftLong" icon={faLeftLong}/>
            <div className="totalDevoluciones">
               <p> Devolución de 30 días </p>
               <span className="devolucion"> Tenés 30 días desde que lo recibís </span>
               <a  href="#" className={`${onBlack && 'devolucionesActiv'}`}> Conoce más</a>
            </div>
        </section>
      </section>
    </>
  );
};

export default Entrega;
