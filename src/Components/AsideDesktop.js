import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import '../Styles/AsideDesktop.css'

const AsideDesktop = ({onBlack}) => {
  return (
    <>
      <section className="DESKTOP_ASIDE_CONTAINER">
        <div className="desktop_vendidos">
          <span>Nuevo</span>
          <hr />
          <span>84 Vendidos</span>
        </div>

        <div className="desktop_product">
          <p>Auriculares Headset Hyperx Orbit S 7.1 Planar Head Tracking</p>
            <FontAwesomeIcon icon={faHeart}/>
        </div>

        <div className="desktop_opiniones">
          <span className="desktop_stars">
            <FontAwesomeIcon className="desktop_icon_star" icon={faStar} />
            <FontAwesomeIcon className="desktop_icon_star" icon={faStar} />
            <FontAwesomeIcon className="desktop_icon_star" icon={faStar} />
            <FontAwesomeIcon className="desktop_icon_star" icon={faStar} />
            <FontAwesomeIcon className="desktop_icon_star" icon={faStarHalfStroke} />
          </span>

          <span className="desktop_p"> 10 Opiniones</span>
        </div>


        <div className="desktop_price">
          <span className="desktop_price_total">$39.259</span>
          <div>
            <span className="desktop_cuotas">en 12x $5.567</span>
          </div>
          <a href="#">Ver los medios de pago </a>
        </div>



        <div>
        <section className={` desktop_free ${onBlack && 'entregaOnBlack'} `}>
        <section className="desktop_envio_gratis">
          <FontAwesomeIcon className="faCarSide" icon={faCarSide} />
          <div>
            <p> Llegara gratis mañana </p>
            <a href="#" className={`${onBlack && 'devolucionesActiv'}`}> Ver más formas de entrga</a>
          </div>
        </section>

        <section className="desktop_devolucion_gratis">
            <FontAwesomeIcon className="faLeftLong" icon={faLeftLong}/>
            <div className="totalDevoluciones">
               <p> Devolución de 30 días </p>
               <span className="devolucion"> Tenés 30 días desde que lo recibís </span>
               <a  href="#" className={`${onBlack && 'devolucionesActiv'}`}> Conoce más</a>
            </div>
        </section>
      </section>
    </div>


      <p className="desktop_color_black">Color : <b>Negro</b></p>


      <section className={`desktop_stock_container ${onBlack && 'stockBlack'}`}>
            <p className={`desktop_texto_stock ${onBlack && 'text_stock_active'}`}>Stock Disponible</p>

            <div className='desktop_container_input'>
                <p>Cantidad: <b>3</b></p>
              <input  type={'number'} placeholder='(29 Disponibles)'/>
            </div>

            <div className='desktop_buttons'>
                <button>Comprar ahora</button>
                <button> Agregar al carrito</button>
            </div>
       </section>
      </section>
    </>
  );
};

export default AsideDesktop;
