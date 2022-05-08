import React from 'react'
import '../Styles/Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Categories from './Categories'

const Search = () => {
  return (
      <>
       <section className='section_search'>
            <input className='search' type='text' placeholder='Busca podructos, marcas, y más...'/>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>

       </section>

        <section>
             <Categories/>
        </section>
      </>
  )
}

export default Search