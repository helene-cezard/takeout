import '../styles/Carrousel.css';
import '../styles/CarrouselItem.css';
import CarrouselItem from './CarrouselItem';
import { pizze } from '../datas/pizze';

function Carrousel({setDescriptionOpen, basket, updateBasket}) {

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
          />
        </div>
        )}
    </ul>
  );
}

export default Carrousel