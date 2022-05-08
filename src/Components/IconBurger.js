import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../Styles/IconBurger.css'

const IconBurger = () => {
  return (
     <section className='section_icon_burger'>
           <FontAwesomeIcon icon={faBars} className='icon_burger_open'/>
     </section>
  )
}

export default IconBurger