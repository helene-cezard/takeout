import Banner from './Banner';
import Basket from './Basket';
import Carousel from './Carousel';
import Description from './Description';
import '../styles/Layout.css'
import { useState } from 'react';

function App() {
  const [descriptionOpen, setDescriptionOpen] = useState(false)
  const [basket, updateBasket] = useState([]);
  const [pizzaName, setPizzaName] = useState('pizza margherita');
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <Banner  isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='inner-layout'>
        <Basket basket={basket} updateBasket={updateBasket} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Carousel
        setDescriptionOpen={setDescriptionOpen}
        basket={basket}
        updateBasket={updateBasket}
        pizzaName={pizzaName}
        setPizzaName={setPizzaName}
        />
        <Description
        descriptionOpen={descriptionOpen}
        setDescriptionOpen={setDescriptionOpen}
        pizzaName={pizzaName}
        setPizzaName={setPizzaName}
        />
      </div>
    </div>
  );
}

export default App;
