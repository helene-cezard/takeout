import '../styles/Banner.css';


function Banner({isOpen, setIsOpen}) {
  return (
  <header className="banner">
    <button onClick={() => setIsOpen(!isOpen)}>Panier</button>
    <h1>Viva Italia</h1>
  </header>
  );
}

export default Banner