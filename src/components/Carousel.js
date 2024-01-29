"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/slider-0.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider-1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider-2.jpeg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider-3.jpeg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider-4.jpeg"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
