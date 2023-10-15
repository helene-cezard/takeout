import { useState } from 'react';
import '../styles/Basket.css'

function Basket() {
const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className='basket'>
      <button className='basket__closeButton' onClick={() => setIsOpen(false)}>X</button>
      <h2 className='basket__title'>Panier</h2>
      <ul>
        <li className='basket__items'>Pizza margerita : <span className='basket__prices'>13€</span></li>
        <li className='basket__items'>Pizza napoletana : <span className='basket__prices'>15€</span></li>
        <li className='basket__items'>Pizza végétarienne : <span className='basket__prices'>10€</span></li>
        <li className='basket__total'>Total : <span className='basket__prices'>38€</span></li>
      </ul>
      <button className='basket__orderButton'>Commander</button>
    </div>
  ) : (
    <button className='basket__openButton'  onClick={() => setIsOpen(true)}>Afficher le panier</button>
  )

}

export default Basket