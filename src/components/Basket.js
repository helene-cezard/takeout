import { useState } from 'react';
import '../styles/Basket.css'

function Basket({basket, updateBasket, isOpen, setIsOpen}) {
const total = basket.reduce(
  (acc, pizzaType) => acc + pizzaType.amount * pizzaType.price,
  0
)

  return isOpen && (
    <div className='basket'>
      <button className='basket__close-button' onClick={() => setIsOpen(false)}>X</button>
      <h2 className='basket__title'>Panier</h2>
      {basket.length > 0 ? (
        <ul>
        {basket.map(({name, price, amount}, index) => (
          <li key={`${name}-${index}`} className='basket__items'>{name} : <span className='basket__prices'>{price}€ x {amount}</span></li>
        ))}
        <li className='basket__total'>Total : <span className='basket__prices'>{total}€</span></li>
      </ul>
      ) : (
        <p>Votre panier est vide</p>
      )}
      <button className='basket__order-button'>Commander</button>
    </div>
  )

}

export default Basket