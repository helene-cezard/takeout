import '../styles/CarouselItem.css'

function CarouselItem({ name, picture, price, setDescriptionOpen, basket, updateBasket, pizzaName, setPizzaName }) {

  function addToBasket(name, price) {
		const currentPizzaSaved = basket.find((pizza) => pizza.name === name)
		if (currentPizzaSaved) {
			const basketFilteredCurrentPizza = basket.filter(
				(pizza) => pizza.name !== name
			);
			updateBasket([
				...basketFilteredCurrentPizza,
				{ name, price, amount: currentPizzaSaved.amount + 1 }
			]);
		} else {
			updateBasket([...basket, { name, price, amount: 1 }]);
		}
	}

	function handleClickOnItem() {
		setDescriptionOpen(true);
		setPizzaName(name);
	}

  return (
    <li className='carousel__item' onClick={() => handleClickOnItem() }>
			<h2 className='carousel__item-name'>{name}</h2>
      <div className='carousel__image-price'>
				<img className='carousel__item-img' src={picture} alt='' />
				<p className='price-tag'>{price}€</p>
			</div>
      <button onClick={() => addToBasket(name, price)}>Ajouter au panier</button>
    </li>
  );
}

export default CarouselItem