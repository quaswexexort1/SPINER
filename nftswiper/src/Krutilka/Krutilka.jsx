import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Krutilka.scss'
import { Autoplay, FreeMode, Mousewheel, Pagination } from 'swiper/modules';
import {slider1, slider2} from '../infa.js'

const Krutilka = () => {
    const pics1 = slider1.map(item => <SwiperSlide key={item.index}><img src={item.img} alt="" /></SwiperSlide>)
    const pics2 = slider2.map(item => <SwiperSlide key={item.index}><img src={item.img} alt="" /></SwiperSlide>)

    return (
        <section className='aaaa'>
            <Swiper
            direction={'horizontal'}
            freeMode={true}
            slidesPerView={3}
            spaceBetween={100}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            
            modules={[Mousewheel, Autoplay, FreeMode]}
            className="mySwiper"
      >
        {pics1}
        </Swiper>
         <Swiper
        direction={'horizontal'}
        freeMode={true}
        slidesPerView={3}
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        
        modules={[Mousewheel, Autoplay, FreeMode]}
        className="mySwiper"
      >
        {pics2}
      </Swiper>

      </section>
    )
}

export default Krutilka