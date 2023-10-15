import Banner from './Banner';
import Basket from './Basket';
import Carrousel from './Carrousel';
import Description from './Description';
import '../styles/Layout.css'
import { useState } from 'react';

function App() {
  const [descriptionOpen, setDescriptionOpen] = useState(true)
  return (
    <div className="App">
      <Banner/>
      <button className='app__basketButton hidden'>Afficher le panier</button>
      <div className='inner-layout'>
        <Basket />
        <Carrousel setDescriptionOpen={setDescriptionOpen} />
        <Description descriptionOpen={descriptionOpen} setDescriptionOpen={setDescriptionOpen}  />
      </div>
    </div>
  );
}

export default App;
