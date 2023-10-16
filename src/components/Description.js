import '../styles/Description.css'
import { pizze } from '../datas/pizze.js'

function Description({ descriptionOpen, setDescriptionOpen, pizzaName, setPizzaName }) {

  const item = pizze.find((pizza) => pizza.name === pizzaName);
  console.log(item)

  return descriptionOpen && (
    <div className='description'>
      <button className='description__closeButton' onClick={() => setDescriptionOpen(false)}>X</button>
      <h2 className='description__title'>{item.name}</h2>
      <img className='description__illustration' src={item.picture} alt={item.name}/>
      <p className='description__text'>{item.description}</p>
      <p>{item.price}€</p>

    </div>
  );
}

export default Description