import './AlmostEnd.scss'
import {partners} from '../infa.js'
import pic from '../images/partners_pic.png'

const Partners = () => {
  const cards = partners.map(item=> 
  <li key={item.index} className={item.index === 0 ? "p_special" : "p_card"}>
    <img src={item.image} alt="" />
  </li>)
  return (
    <section className="partners_sec">
      <div className="partners_title">
        <div>
           <h2>Backed by the best</h2>
          <p>Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <ul className='partners_ul'>
          {cards}
        </ul>
        
      </div>
      <div className='p_form'>
        <div className='p_content'>
            <h2>Never miss a drop</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <form>
              <input type="text" />
              <button type='submit'></button>
            </form>
        </div>
         
        </div>
        <img className='pic_center' src={pic} alt="" />
    </section>
  )
}

export default Partners