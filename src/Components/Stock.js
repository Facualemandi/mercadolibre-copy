import React from 'react'
import '../Styles/Stock.css'

const Stock = ({onBlack}) => {
  return (
       <section className={`stock_container ${onBlack && 'stockBlack'}`}>
            <p className={`text_stock ${onBlack && 'text_stock_active'}`}>Stock Disponible</p>

            <div className='containerInput'>
                <p>Cantidad: <b>3</b></p>
              <input  type={'number'} placeholder='(29 Disponibles)'/>
            </div>

            <div className='buttomAdd'>
                <button>Comprar ahora</button>
                <button> Agregar al carrito</button>
            </div>
       </section>
  )
}

export default Stock