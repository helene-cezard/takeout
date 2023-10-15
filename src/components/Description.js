import '../styles/Description.css'

function Description({descriptionOpen, setDescriptionOpen}) {
  return descriptionOpen && (
    <div className='description'>
      <button className='description__closeButton' onClick={() => setDescriptionOpen(false)}>X</button>
      <h2 className='description__title'>Pizza margerita</h2>
      <img className='description__illustration' src='https://cdn.pixabay.com/photo/2017/07/22/22/57/pizza-2530169_1280.jpg' alt='pizza marguerita'/>
      <p className='description__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id doloremque earum. Nostrum suscipit quae assumenda natus tempora voluptates a illo sequi obcaecati ad rem earum vitae quo dolores totam eligendi, molestiae exercitationem error fuga iste beatae soluta quaerat. Aspernatur, quidem aliquid sunt sequi commodi sapiente distinctio veniam nisi, est eligendi modi maxime rerum culpa praesentium asperiores vitae cumque officia vero beatae harum omnis, aut atque! Sequi, recusandae? Exercitationem dolorum debitis minima praesentium sit rem fugiat necessitatibus nostrum a molestiae!</p>

    </div>
  );
}

export default Description