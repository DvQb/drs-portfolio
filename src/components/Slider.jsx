
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



 function MySlider() {
    return (
      

      <section className="py-12 text-center mb-14">
        
        <h2 className="font-bold text-4xl pt-8 pb-14">PROJECTS</h2>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide><div className="sliderStyle bg-red-400">1</div></SwiperSlide>
        <SwiperSlide><div className="sliderStyle bg-orange-300">2</div></SwiperSlide>
        <SwiperSlide><div className="sliderStyle bg-blue-400">3</div></SwiperSlide>
        <SwiperSlide><div className="sliderStyle bg-blue-400">4</div></SwiperSlide>
        <SwiperSlide><div className="sliderStyle bg-blue-400">5</div></SwiperSlide>
      </Swiper>

      </section>
      
    );
  }


export default MySlider;