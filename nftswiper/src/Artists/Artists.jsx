import'./Artists.scss';
import btn_pic from '../images/trending_btn.png';
import { useState } from 'react';
import ASDASD from './ASDASD';
import AAA from './AAA';

const Artists = () => {
  const [sw, setSw] = useState(0);

  return (
    <section className='art_sec'>
      <div className='art_nav'>
        <button className={`btn_all ${sw === 0 ? 'active' : ''}`} onClick={()=>setSw(0)}>
          <div>
             <div className='btn_view'> 
              <img src={btn_pic} alt="" />
              <h4><span>View all artists</span></h4>
            </div>
            <p>Lorem ipsum dolor sit amet, tempor consectetur dolore.</p>
          </div>
         
        </button>
        <button  className={`btn_popular ${sw === 1 ? 'active' : ''}`} onClick={()=>setSw(1)}> 
          <h3>Popular artists</h3>
        </button>
      </div>
      <div className='art_div'>
        {sw===0 ? <AAA/> : <ASDASD/>}
      </div>
      
    </section>
  )
}

export default Artists