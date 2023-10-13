import '../styles/Carrousel.css'
import CarrouselItem from './CarrouselItem';

function Carrousel() {
  return (
    <div className="carrousel">
      <CarrouselItem />
      <CarrouselItem />
      <CarrouselItem />
      <CarrouselItem />
    </div>
  );
}

export default Carrousel