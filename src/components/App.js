import Banner from './Banner';
import Basket from './Basket';
import Carousel from './Carousel';
import Description from './Description';
import '../styles/Layout.css';
import '../styles/App.css';
import { useEffect, useState } from 'react';

function App() {
  const [descriptionOpen, setDescriptionOpen] = useState(false)

  const savedBasket = localStorage.getItem('basket');
  const [basket, updateBasket] = useState(savedBasket ? JSON.parse(savedBasket) : []);
  const [pizzaName, setPizzaName] = useState('pizza margherita');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const stringifiedBasket = JSON.stringify(basket);
    localStorage.setItem('basket', stringifiedBasket);
  }, [basket]);

  function addToBasket(name, price) {
		const currentPizzaSaved = basket.find((pizza) => pizza.name === name)
		if (currentPizzaSaved) {
			const basketUpdatedCurrentPizza = basket.map(
				(pizza) => {
					if (pizza.name === name) {
					pizza.amount +=1;
					return pizza;
				}
				return pizza;
			}
				);
				updateBasket(basketUpdatedCurrentPizza);
		} else {
			updateBasket([...basket, { name, price, amount: 1 }]);
		}
	}

  return (
    <div className="App">
      <Banner  isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='inner-layout'>
        <Basket basket={basket} updateBasket={updateBasket} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Carousel
        setDescriptionOpen={setDescriptionOpen}
        basket={basket}
        updateBasket={updateBasket}
        setPizzaName={setPizzaName}
        setIsOpen={setIsOpen}
        addToBasket={addToBasket}
        />
        <Description
        descriptionOpen={descriptionOpen}
        setDescriptionOpen={setDescriptionOpen}
        pizzaName={pizzaName}
        setPizzaName={setPizzaName}
        addToBasket={addToBasket}
        setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}

export default App;
