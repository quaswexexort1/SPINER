import {create_and_sell} from '../infa.js'
import circle from '../images/circle.png'
import './Create.scss'

const Create = () => {
  const cards = create_and_sell.map(item => <li className='createe' key={Math.random()}>
    <div>
        <img src={circle} alt="" />
        <h4>{item.title}</h4>
        <p>{item.text}</p>
    </div>
  </li>)
  return (
    <section className='create_sector'>
      <h2>Create and sell NFTs</h2>
      <ul className='ssdsasdadsas'>
        {cards}
      </ul>
    </section>
  )
}

export default Create