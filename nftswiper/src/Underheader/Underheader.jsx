import './Underheader.scss'
import play from '../images/play.png'
import zalupen from '../images/zalupen.png'
import chtoto from '../images/chtoto.png'

const Underheader = () => {
  return (
    <section className='undersection'>
      <div className='undertext'>
        <div>
            <h1>
              Discover rare digital art and collect NFT’s
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum.
            </p>

        </div>
             <button className='buttonwatch'>
                <h2>Watch video</h2>
                <img src={play} alt="" />
             </button>
      </div>
      <img className='pictureunder' src={chtoto} alt="" />
      <img className='watermarkunder' src={zalupen} alt="" />
      <div className='kvadrat1'></div>
      <div className='kvadrat2'></div>     
    </section>
  )
}

export default Underheader