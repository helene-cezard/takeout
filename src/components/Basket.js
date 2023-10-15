import { useState } from 'react';
import '../styles/Basket.css'

function Basket({basket, updateBasket}) {
const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className='basket'>
      <button className='basket__closeButton' onClick={() => setIsOpen(false)}>X</button>
      <h2 className='basket__title'>Panier</h2>
      {basket.length > 0 ? (
        <ul>
        {basket.map(({name, price, amount}, index) => (
          <li key={`${name}-${index}`} className='basket__items'>{name} : <span className='basket__prices'>{price}€ x {amount}</span></li>
        ))}
        <li className='basket__total'>Total : <span className='basket__prices'>38€</span></li>
      </ul>
      ) : (
        <p>Votre panier est vide</p>
      )}
      <button className='basket__orderButton'>Commander</button>
    </div>
  )
   : (
    <button className='basket__openButton'  onClick={() => setIsOpen(true)}>Afficher le panier</button>
  )

}

export default Basket