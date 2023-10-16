import '../styles/Carrousel.css';
import '../styles/CarrouselItem.css';
import CarrouselItem from './CarrouselItem';
import { pizze } from '../datas/pizze';

function Carrousel({setDescriptionOpen, basket, updateBasket, pizzaName, setPizzaName}) {

  return (
    <ul className="carrousel">
      {pizze.map(({ id, name, picture, price }) => 
        <div key={id}>
          <CarrouselItem
          name={name}
          picture={picture}
          price={price}
          setDescriptionOpen={setDescriptionOpen}
          basket={basket}
          updateBasket={updateBasket}
          pizzaName={pizzaName}
          setPizzaName={setPizzaName}
          />
        </div>
        )}
    </ul>
  );
}

export default Carrousel