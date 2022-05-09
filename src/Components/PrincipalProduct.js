import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import '../Styles/PrincipalProduct.css'
import principalAuriculares from '../Images/principalAuriculares.png'


const PrincipalProduct = () => {
  return (
      <>

      <section className='PrincipalProduct'>
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
          <img className='principalProduct' src={principalAuriculares} alt='Auricualres Hyperx Orbit S 7.1'/>

          <div className='container_colorAndimg'>
              <div className='color_black'>
                  <span>Color :</span>
                  <span> Negro</span>
              </div>
              <img className='shortProduct_principal' alt='Auricualres Hyperx Orbit S 7.1' src={principalAuriculares}/>
          </div>

      </section>

     <section className='PrincipalProduct_price'>
            <span>$39.259</span>
           <span>en 12x $ 5.567</span>
           <a href='#'>Ver los medios de pago</a>
     </section>


 </section>


      
      </>
  )
}

export default PrincipalProduct