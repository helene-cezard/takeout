import '../styles/Carrousel.css';
import '../styles/CarrouselItem.css';
import CarrouselItem from './CarrouselItem';
import { pizze } from '../datas/pizze';

function Carrousel({setDescriptionOpen}) {
  return (
    <ul className="carrousel">
      {pizze.map(({ id, name, picture, price }) => 
        <CarrouselItem
        id={id}
        name={name}
        picture={picture}
        price={price}
        setDescriptionOpen={setDescriptionOpen}
        />
        )}
    </ul>
  );
}

export default Carrousel