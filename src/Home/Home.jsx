import React from 'react';
import Card1 from './SliderCard/Card1';
import Card2 from './SliderCard/Card2';
import Card3 from './SliderCard/Card3';
import Navbar from "../component/NavBar/Navbar"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import './Home.css';
import useScrollToTop from '../component/Hooks/useScrollToTop';


const Page1 = () => {
 
  useScrollToTop();

  return (
    <div className="Page-1" id='Home'>
       <Navbar/>
      <>
      <Swiper
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        speed={1200}
        slidesPerGroupSkip={3}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card2/></SwiperSlide>
        <SwiperSlide><Card3/></SwiperSlide>
      </Swiper>
      </>
    </div>
  );
};

export default Page1;