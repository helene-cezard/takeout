import '../styles/Basket.css'

function Basket() {
  return (
    <div className='basket'>
      <button className='basket__closeButton'>X</button>
      <h2 className='basket__title'>Panier</h2>
      <ul>
        <li className='basket__items'>Pizza margerita : <span className='basket__prices'>13€</span></li>
        <li className='basket__items'>Pizza napoletana : <span className='basket__prices'>15€</span></li>
        <li className='basket__items'>Pizza végétarienne : <span className='basket__prices'>10€</span></li>
        <li className='basket__total'>Total : <span className='basket__prices'>38€</span></li>
      </ul>
      <button className='basket__orderButton'>Commander</button>
    </div>
  );

}

export default Basket