import '../styles/Carrousel.css';
import '../styles/CarrouselItem.css';
import CarrouselItem from './CarrouselItem';
import { pizze } from '../datas/pizze';
import { useState } from 'react';

function Carrousel({setDescriptionOpen, basket, updateBasket, pizzaName, setPizzaName}) {

  const [carrouselImage, setCarrouselImage] = useState('carrousel--first-picture');
  const imgNumber =['first', 'second', 'third', 'fourth'];

  function handleClickCarrousel(event) {
    if (!event.target.classList.contains('carrousel__slide-button--active') && event.target.value === 'first') {
      setCarrouselImage('carrousel--first-picture');
    }

    if (!event.target.classList.contains('carrousel__slide-button--active') && event.target.value === 'second') {
      setCarrouselImage('carrousel--second-picture');
    }

    if (!event.target.classList.contains('carrousel__slide-button--active') && event.target.value === 'third') {
      setCarrouselImage('carrousel--third-picture');
    }

    if (!event.target.classList.contains('carrousel__slide-button--active') && event.target.value === 'fourth') {
      setCarrouselImage('carrousel--fourth-picture');
    }

    // event.target.classList.toggle('carrousel__slide-button--active');
    // console.log(event.target.parent)
  }

  return (
    <div className='carrousel__container'>
      <ul className={`carrousel ${carrouselImage}`}>
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
      <div className='carrousel__buttons-container'>
        {imgNumber.map((number, index) =>
        <button
        key={index}
        className={`carrousel__slide-button ${ carrouselImage === `carrousel--${number}-picture` ? 'carrousel__slide-button--active' : '' }`}
        value={number}
        onClick={(event) => handleClickCarrousel(event)}
        ></button>
        )}
      </div>
    </div>
  );
}

export default Carrousel