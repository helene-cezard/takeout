import '../styles/Description.css'
import { pizze } from '../datas/pizze'

function Description({ descriptionOpen, setDescriptionOpen, pizzaName, addToBasket, setIsOpen }) {

  const item = pizze.find((pizza) => pizza.name === pizzaName);

  return descriptionOpen && (
    <div className='description'>
      <button className='description__close-button' onClick={() => setDescriptionOpen(false)}>X</button>
      <h2 className='description__title'>{item.name}</h2>
      <div className='description__image-price'>
        <img className='description__illustration' src={item.picture} alt={item.name}/>
        <p className='price-tag'>{item.price}€</p>
      </div>
      <p className='description__text'>{item.description}</p>
      <button className='add-to-basket-button' onClick={() => {addToBasket(item.name, item.price); setIsOpen(true)}}>Ajouter au panier</button>

    </div>
  );
}

export default Description