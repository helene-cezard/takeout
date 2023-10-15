import Banner from './Banner';
import Basket from './Basket';
import Carrousel from './Carrousel';
import Description from './Description';
import '../styles/Layout.css'
import { useState } from 'react';

function App() {
  const [descriptionOpen, setDescriptionOpen] = useState(true)
  const [basket, updateBasket] = useState([]);

  return (
    <div className="App">
      <Banner/>
      <div className='inner-layout'>
        <Basket basket={basket} updateBasket={updateBasket} />
        <Carrousel setDescriptionOpen={setDescriptionOpen} basket={basket} updateBasket={updateBasket} />
        <Description descriptionOpen={descriptionOpen} setDescriptionOpen={setDescriptionOpen}  />
      </div>
    </div>
  );
}

export default App;
