import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';
// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <div className="slider-container">
    <h2>룸메이트 구해요</h2>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <Card title="Card 1" content="This is the content of card 1." />
        <Card title="Card 1" content="This is the content of card 1." />
        <Card title="Card 1" content="This is the content of card 1." />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="Card 2" content="This is the content of card 1." />
      </SwiperSlide>
      <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
      <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
      <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
      <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
      <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
      <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
      <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
    </Swiper>
  </div>
  );
}