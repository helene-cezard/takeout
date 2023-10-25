import '../styles/Carousel.css';
import '../styles/CarouselItem.css';
import CarouselItem from './CarouselItem';
import { pizze } from '../datas/pizze';
import { useState } from 'react';

function Carousel({setDescriptionOpen, basket, updateBasket, setPizzaName, isOpen, setIsOpen}) {

  const [carouselImage, setCarouselImage] = useState('carousel--first-picture');
  const imgNumber =['first', 'second', 'third', 'fourth'];

  function handleClickCarousel(event) {
    if (!event.target.classList.contains('carousel__slide-button--active') && event.target.value === 'first') {
      setCarouselImage('carousel--first-picture');
    }

    if (!event.target.classList.contains('carousel__slide-button--active') && event.target.value === 'second') {
      setCarouselImage('carousel--second-picture');
    }

    if (!event.target.classList.contains('carousel__slide-button--active') && event.target.value === 'third') {
      setCarouselImage('carousel--third-picture');
    }

    if (!event.target.classList.contains('carousel__slide-button--active') && event.target.value === 'fourth') {
      setCarouselImage('carousel--fourth-picture');
    }

    // event.target.classList.toggle('carousel__slide-button--active');
    // console.log(event.target.parent)
  }

  return (
    <div className='carousel__container'>
      <ul className={`carousel ${carouselImage}`}>
        {pizze.map(({ id, name, picture, price }) =>
          <div key={id}>
            <CarouselItem
            name={name}
            picture={picture}
            price={price}
            setDescriptionOpen={setDescriptionOpen}
            basket={basket}
            updateBasket={updateBasket}
            setPizzaName={setPizzaName}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            />
          </div>
          )}
      </ul>
      <div className='carousel__buttons-container'>
        {imgNumber.map((number, index) =>
        <button
        key={index}
        className={`carousel__slide-button ${ carouselImage === `carousel--${number}-picture` ? 'carousel__slide-button--active' : '' }`}
        value={number}
        onClick={(event) => handleClickCarousel(event)}
        ></button>
        )}
      </div>
    </div>
  );
}

export default Carousel