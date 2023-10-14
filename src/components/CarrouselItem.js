import '../styles/CarrouselItem.css'

function CarrouselItem({ id, name, picture, price }) {
  return (
    <li key={id} className='carrousel__item'>
      <img className='carrousel__itemImg' src={picture} alt='' />
      <p className='carrousel__itemName'>{name}</p>
      <button>Ajouter au panier</button>
      <p>{price}€</p>
    </li>
  );
}

export default CarrouselItem