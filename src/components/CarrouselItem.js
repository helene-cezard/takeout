import '../styles/CarrouselItem.css'

function CarrouselItem() {
  return (
    <div className='carrousel__item'>
      <img className='carrousel__itemImg' src='https://cdn.pixabay.com/photo/2017/07/22/22/57/pizza-2530169_1280.jpg' alt='' />
      <p className='carrousel__itemName'>Pizza margerita</p>
    </div>
  );
}

export default CarrouselItem