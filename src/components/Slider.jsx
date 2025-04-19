
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dispelAE from '../assets/img/dispelAE.png'
import elCentinela from '../assets/img/elCentinela.png'
import extensionList from '../assets/img/extensionList.png'
import manage from '../assets/img/manage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJsSquare, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { SiTailwindcss, SiJson } from "react-icons/si";



 function MySlider() {
    return (
      

      <section className="py-12 text-center m-auto mt-20 mb-28 md:mt-0 md:mb-14 w-full lg:w-[85%] ">
        
        <h2 className="font-bold text-3xl md:text-4xl mb-20 md:pt-8 md:mb-14">PROJECTS</h2>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
       
        pagination={{ clickable: true }}
        loop = {true}
        autoplay = {{delay : 2000}}
       
      >
        <SwiperSlide>
          <div className=" sliderStyle  grid  ">
              <img src={dispelAE} alt="Dispel Project Image" className=' w-full h-[210px]    rounded-t-2xl ' />
              <div className='h-full pb-4 pt-6 mb-4  bg-background/20 dark:bg-[#2a2a2a] dark:text-textPrimary rounded-b-2xl font-semibold text-xl text-black'>
                <h4>Dispel AE</h4>
                <div className='flex gap-6 justify-center mt-4'>
                  <FontAwesomeIcon icon={faReact}/>
                  <FontAwesomeIcon icon={faHtml5}/>
                  <SiTailwindcss />
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderStyle grid">
            <img src={elCentinela} alt="El Centinela Project Image" className='w-full h-[210px]   rounded-t-2xl ' />
           <div className='h-full pb-4 pt-6 mb-4  bg-background/20 dark:bg-[#2a2a2a] dark:text-textPrimary rounded-b-2xl font-semibold text-xl text-black'>
                <h4>El Centinela</h4>
                <div className='flex gap-6 justify-center mt-4'>
                  <FontAwesomeIcon icon={faWordpress}/>
                </div>
              </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderStyle grid">
            <img src={manage} alt="Manage project Image" className='w-full h-[210px]   rounded-t-2xl' />
          <div className='h-full pb-4 pt-6 mb-4  bg-background/20 dark:bg-[#2a2a2a] dark:text-textPrimary rounded-b-2xl font-semibold text-xl text-black'>
                <h4>Manage</h4>
                <div className='flex gap-6 justify-center mt-4'>
                  <FontAwesomeIcon icon={faJsSquare}/>
                  <FontAwesomeIcon icon={faHtml5}/>
                  <SiTailwindcss />
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderStyle grid">
            <img src={extensionList} alt="" className='w-full h-[210px]   rounded-t-2xl' />
            <div className='h-full pb-4 pt-6 mb-4 bg-background/20 dark:bg-[#2a2a2a] dark:text-textPrimary rounded-b-2xl font-semibold text-xl text-black'>
                <h4>Extension List</h4>
                <div className='flex gap-6 justify-center mt-4'>
                  <FontAwesomeIcon icon={faReact}/>
                  <FontAwesomeIcon icon={faCss3Alt}/>
                  <SiTailwindcss />
                  <SiJson />
                </div>
              </div>
          </div>
        </SwiperSlide>
        
      </Swiper>

      </section>
      
    );
  }


export default MySlider;