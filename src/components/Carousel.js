"use client"
import Image from 'next/image';
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
          <Image src="/slider-0.jpeg" width={2267} height={556} alt="Slider de imagenes" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider-1.jpeg" width={2267} height={556} alt="Slider de imagenes" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider-2.jpeg" width={2267} height={556} alt="Slider de imagenes" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider-3.jpeg" width={2267} height={556} alt="Slider de imagenes" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider-4.jpeg" width={2267} height={556} alt="Slider de imagenes" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
