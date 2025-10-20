import './Trend.scss'
import btn_pic from '../images/trending_btn.png'
import {trending} from '../infa.js'
import chtoto from '../images/chtoto.png'

const Trend = () => {
  const trend_pics = trending.map((item) => 
  <li key={Math.random()} className='trend_card'>
    <div>
      <h5>{item.title}</h5>
      <div className='text_card'>
        <p>{item.text}</p>
        <p><span>{item.cost}</span></p>
      </div>
    </div>
    <div className='img_cards'>
      <img className='bg_card' src={item.image} alt="" />
      <img className='w_card' src={chtoto} alt="" />
    </div>
  </li>)
  return (
    <section className='trend_sec'>
      <ul>
        <li className='trend_title'>
            <h2 className='saddsasadsdasdasddsa'>Trending this week</h2>
            <p className='dsaasdsadasasd'>Lorem ipsum dolor sit amet, consectetur dolore adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.</p>
        </li>
        {trend_pics}
        <li className='trend_btn'>
          <button>
            <img src={btn_pic} alt="" />
            <p>View marketplace</p>
          </button>
        </li>
      </ul>
      
    </section>
  )
}

export default Trend