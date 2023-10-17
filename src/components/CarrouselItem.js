import '../styles/CarrouselItem.css'

function CarrouselItem({ name, picture, price, setDescriptionOpen, basket, updateBasket, pizzaName, setPizzaName }) {

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
    <li className='carrousel__item' onClick={() => handleClickOnItem() }>
      <img className='carrousel__item-img' src={picture} alt='' />
      <p className='carrousel__item-name'>{name}</p>
      <button onClick={() => addToBasket(name, price)}>Ajouter au panier</button>
      <p>{price}€</p>
    </li>
  );
}

export default CarrouselItem