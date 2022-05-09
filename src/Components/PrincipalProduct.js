import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import '../Styles/PrincipalProduct.css'
import principalAuriculares from '../Images/principalAuriculares.png'
import secondPrincipalProduct from '../Images/secondPrincipalProduct.png'
import threePrincipalProduct from '../Images/threePrincipalProduct.png'
import fourPrincipalProduct from '../Images/fourPrincipalProduct.png'
import fivePrincipalProduct from '../Images/fivePrincipalProduct.png'


const PrincipalProduct = ({onChangeProduct, productTwo, productOne, productThree,productFour, productFive, onBlack}) => {
  return (
      <>

      <section className={`PrincipalProduct ${onBlack && 'principalProdcut-active'}`}>
          <div className='newSold'>
              <span>Nuevo</span>
                <hr/>
              <span>84 Vendidos</span>
          </div>

          <p className='description_principal_product'> Auriculares HEadset Hyperx Orbit S 7.1 Planar Head Tracking</p>

          <div className='icon_container'>
              <span>
                  <FontAwesomeIcon  className='icon_star' icon={faStar}/>
                  <FontAwesomeIcon  className='icon_star'icon={faStar}/>
                  <FontAwesomeIcon  className='icon_star'icon={faStar}/>
                  <FontAwesomeIcon  className='icon_star' icon={faStar}/>
                  <FontAwesomeIcon  className='icon_star'icon={faStarHalfStroke}/>
              </span>

               <span> 10 Opiniones</span>
          </div>

      <section>
          <div className='container_img_Principal'>
          {productOne && <img className='principalProduct' src={principalAuriculares} alt='Auricualres Hyperx Orbit S 7.1'/>}
          {productTwo && <img className='secondProduct' src={secondPrincipalProduct} alt='Auricualres Hyperx Orbit S 7.1'/>}
          {productThree && <img className='secondProduct' src={threePrincipalProduct} alt='Auricualres Hyperx Orbit S 7.1'/>}
          {productFour && <img className='secondProduct' src={fourPrincipalProduct} alt='Auricualres Hyperx Orbit S 7.1'/>}
          {productFive && <img className='secondProduct' src={fivePrincipalProduct} alt='Auricualres Hyperx Orbit S 7.1'/>}
             <p className='changePrincipalProduct' onClick={onChangeProduct}> <FontAwesomeIcon icon={faRightToBracket}/> </p>
          </div>

          <div className='container_colorAndimg'>
              <div className={`color_black ${onBlack && 'is-active'}`}>
                  <span>Color :</span>
                  <span> Negro</span>
              </div>
              <img className='shortProduct_principal' alt='Auricualres Hyperx Orbit S 7.1' src={principalAuriculares}/>
          </div>

      </section>

     <section className='PrincipalProduct_price'>
            <span>$39.259</span>
           <span>en 12x $ 5.567</span>
           <a href='#' className={`${onBlack && 'a-is-active'}`}>Ver los medios de pago</a>
     </section>


 </section>


      
      </>
  )
}

export default PrincipalProduct