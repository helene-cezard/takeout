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

  return (
    <div className="App">
      <Banner/>
      <div className='inner-layout'>
        <Basket basket={basket} updateBasket={updateBasket} />
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
