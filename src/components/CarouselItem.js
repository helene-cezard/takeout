import '../styles/CarouselItem.css'
import { useEffect } from 'react';

function CarouselItem({ name, picture, price, setDescriptionOpen, basket, updateBasket, setPizzaName, setIsOpen, addToBasket }) {

	function handleClickOnItem() {
		setDescriptionOpen(true);
		setPizzaName(name);
	}

  return (
    <li className='carousel__item'>
			<h2 className='carousel__item-name'>{name}</h2>
      <div className='carousel__image-price' onClick={() => handleClickOnItem() }>
				<img className='carousel__item-img' src={picture} alt='' />
				<p className='price-tag'>{price}€</p>
			</div>
      <button className='add-to-basket-button' onClick={() => {addToBasket(name, price); setIsOpen(true)}}>Ajouter au panier</button>
    </li>
  );
}

export default CarouselItem