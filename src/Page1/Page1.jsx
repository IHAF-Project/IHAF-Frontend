import { useState, useEffect } from 'react';
import Card1 from '../SliderCard/Card1';
import Card2 from '../SliderCard/Card2';
import Card3 from '../SliderCard/Card3';
import Navbar from "../NavBar/Navbar"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import './Page1.css';


const Page1 = () => {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % 3);
      }
    }, 400000); 

    return () => clearInterval(interval); 
  }, [isHovered]);

  return (
    <div className="Page-1">
       <Navbar/>
      <>
      <Swiper
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 400000,
          disableOnInteraction: false
        }}
        speed={1200}
        slidesPerGroupSkip={3}
     
        className="mySwiper"
      >
        
        <SwiperSlide><Card1 /></SwiperSlide>
        <SwiperSlide><Card2/></SwiperSlide>
        <SwiperSlide><Card3/></SwiperSlide>
      </Swiper></>
    </div>
  );
};

export default Page1;
