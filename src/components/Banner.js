import '../styles/Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'



function Banner({isOpen, setIsOpen}) {
  const element = <FontAwesomeIcon icon={faBasketShopping} />
  return (
  <header className="banner">
    <button className='banner__basket-button' onClick={() => setIsOpen(!isOpen)}>{element}</button>
    <h1>Viva Italia</h1>
  </header>
  );
}

export default Banner