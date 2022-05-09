import React from 'react'
import '../Styles/Stock.css'

const Stock = () => {
  return (
       <section className='stock_container'>
            <p className='text_stock'>Stock Disponible</p>

            <div className='containerInput'>
                <p>Cantidad: <b>3</b></p>
              <input type={'number'} placeholder='(29 Disponibles)'/>
            </div>

            <div className='buttomAdd'>
                <button>Comprar ahora</button>
                <button> Agregar al carrito</button>
            </div>
       </section>
  )
}

export default Stock