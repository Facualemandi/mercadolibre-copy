import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import prodVend1 from "../Images/productosVendidos1.png";
import prodVend2 from "../Images/productosVendidos2.png";
import prodVend3 from "../Images/productosVendidos3.png";
import prodVend4 from "../Images/productosVendidos4.png";
import prodVend5 from "../Images/productosVendidos5.png";
import '../Styles/ProductosVendidos.css'



import "../Styles/Sproducts.css";

const ProductosVendidos = ({ onBlack }) => {
  return (
    <>
      <section className={`${onBlack && "TotalContainer_Products"}`}>
        <p className={`cheap ${onBlack && "is-active"}`}>
          {" "}
          Quienes vieron este Producto tambien compraron...{" "}
        </p>
        

        <section className="totalProductosVendidos">

          <section className="auricularesMasVendidos">
            <img className="auriculares" src={prodVend1} alt="Headphones Sony" />

            <div className="products_description">
            <hr/>
              <p>Auriculares gamer inalambricos Razen</p>
              <span className="price">$49.229</span>
              <span className="free">
                Envío gratis <FontAwesomeIcon icon={faBoltLightning} />
                FULL
              </span>
            </div>
          </section>


          <section className="auricularesMasVendidos">
            <img className="auriculares" src={prodVend2} alt="Headphones Apple" />
            <div className="products_description">
                 <hr/>
              <p>Auriculares gamer inalambricos AStro A50 negros</p>
              <span className="price">$33.645</span>
              <span className="free">Envío gratis</span>
            </div>
          </section>


          <section className="auricularesMasVendidos">
            <img className="auriculares" src={prodVend3} alt="Headphones Samsung" />
            <div className="products_description">
                 <hr/>
              <p>Auriculares Audio-Technica M-Series ATH-M50x negro</p>
              <span className="price">$39.219</span>
              <span className="free">Envío gratis</span>
            </div>
          </section>


          <section className="auricularesMasVendidos">
            <img className="auriculares" src={prodVend4} alt="Headphones Samsung" />
            <div className="products_description">
                 <hr/>
              <p>Auriculares gamer Logitech G Pro negro</p>
              <span className="price">$14.384</span>
              <span className="free">Envío gratis</span>
            </div>
          </section>


          <section className="auricularesMasVendidos">
            <img className="auriculares" src={prodVend5} alt="Headphones Samsung" />
            <div className="products_description">
                 <hr/>
              <p>Auriculares gamer HyperX Cloud Alpha black y red</p>
              <span className="price">$18.140</span>
              <span className="free">Envío gratis</span>
            </div>
          </section>


        </section>
      </section>
    </>
  );
};

export default ProductosVendidos;
