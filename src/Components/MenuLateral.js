import React from 'react'
import '../Styles/MenuLateral.css'

const MenuLateral = ({menu,onBlack}) => {
  return (
     <>
     <section className={` container_menu ${menu && 'is-active'} ${onBlack && 'menuBlack'}`}>
         <ul>
             <li>Menu</li>
             <li>Inicio</li>
             <li>Ofertas</li>
             <li>Historial</li>
             <li>Ayuda</li>
             <hr/>
             <li>SuperMercado</li>
             <li>Moda</li>
             <li>Mas vendidos</li>
             <li>Tiendas Oficiales</li>
             <li>Categorias</li>
             <hr/>
             <li>Resumen</li>
             <li>Vender</li>
         </ul>
     </section>
     </>
  )
}

export default MenuLateral