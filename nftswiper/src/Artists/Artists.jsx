import'./Artists.scss';
import btn_pic from '../images/trending_btn.png';
import { useState } from 'react';
import ASDASD from './ASDASD';
import AAA from './AAA';

const Artists = () => {
  return (
    <section className='art_sec'>
      <div className='art_nav'>
        <button className='btn_all active'>
          <div>
            <div className='btn_view'>
              <img src={btn_pic} alt="" />
              <h4><span>View all artists</span></h4>
            </div>
            <p className='sadsdasaasdasasasdasdsad'>Lorem ipsum dolor sit amet,</p>
          </div>
        </button>

        <button className='btn_popular'>
          <h3>Popular artists</h3>
        </button>
      </div>

      <div className='art_div'>
        <AAA />
      </div>
    </section>
  )
}


export default Artists