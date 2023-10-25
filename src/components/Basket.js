import '../styles/Basket.css'
import React from 'react';

function Basket({basket, updateBasket, isOpen, setIsOpen}) {
const total = basket.reduce(
  (acc, pizzaType) => acc + pizzaType.amount * pizzaType.price,
  0
);

function removeFromBasket(name) {
  updateBasket((basket) => basket.filter((pizza) => pizza.name !== name))
}

function updateAmount(name, value) {
  const basketUpdatedCurrentPizza = basket.map(
    (pizza) => {
      if (pizza.name === name) {
      pizza.amount = value;
      return pizza;
    }
    return pizza;
  }
    );
    updateBasket(basketUpdatedCurrentPizza);
}


  return isOpen && (
    <div className='basket'>
      <button className='basket__close-button' onClick={() => setIsOpen(false)}>X</button>
      <h2 className='basket__title'>Panier</h2>
      {basket.length > 0 ? (
        <div className='basket__content'>
          <ul>
          {basket.map(({name, price, amount}, index) =>
          (
            <li key={`${name}-${index}`} className='basket__items'>
              {name} :
              <span
              className='basket__prices'>{price}€ x <input 
                className='basket__amount' type='number' value={`${amount}`} min={0}
                onBlur={() => amount === '0' && removeFromBasket(name)}
                onChange={(event) => updateAmount(name, event.target.value)}
              />
              </span>
               <button onClick={() => removeFromBasket(name)}>X</button>
            </li>
          ))}
            <li className='basket__total'>Total : <span className='basket__prices'>{total}€</span></li>
          </ul>
          <button className='basket__empty-button' onClick={() => updateBasket([])}>Vider le panier</button>
        </div>
      ) : (
        <p>Votre panier est vide</p>
      )}
      <button className='basket__order-button'>Commander</button>
    </div>
  )

}

export default Basket