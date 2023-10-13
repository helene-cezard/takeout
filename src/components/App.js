import Banner from './Banner';
import Basket from './Basket';
import Carrousel from './Carrousel';
import Description from './Description';
import '../styles/Layout.css'
import '../styles/App.css'

function App() {
  return (
    <div className="App">
      <Banner/>
      <button className='app__basketButton hidden'>Afficher le panier</button>
      <div className='inner-layout'>
        <Basket />
        <Carrousel />
        <Description />
      </div>
    </div>
  );
}

export default App;
