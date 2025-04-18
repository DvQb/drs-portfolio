
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dispelAE from '../assets/img/dispelAE.png'
import elCentinela from '../assets/img/elCentinela.png'
import extensionList from '../assets/img/extensionList.png'
import manage from '../assets/img/manage.png'



 function MySlider() {
    return (
      

      <section className="py-12 text-center m-auto mt-20 mb-28 md:mt-0 md:mb-14 w-full lg:w-[85%] ">
        
        <h2 className="font-bold text-3xl md:text-4xl mb-20 md:pt-8 md:mb-14">PROJECTS</h2>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
       
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="sliderStyle ">
              <img src={dispelAE} alt="" className=' w-full h-full   rounded-2xl ' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderStyle">
            <img src={elCentinela} alt="" className='w-full h-full   rounded-2xl ' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderStyle ">
            <img src={manage} alt="" className='w-full h-full   rounded-2xl' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderStyle">
            <img src={extensionList} alt="" className='w-full h-full   rounded-2xl' />
          </div>
        </SwiperSlide>
        
      </Swiper>

      </section>
      
    );
  }


export default MySlider;