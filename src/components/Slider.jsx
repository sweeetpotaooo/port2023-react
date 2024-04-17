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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Card title="Card 1" content="This is the content of card 1." />
          <Card title="Card 1" content="This is the content of card 1." />
          <Card title="Card 1" content="This is the content of card 1." />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Card 2" content="This is the content of card 1." /></SwiperSlide>
        <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
        <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
        <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
        <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
        <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
        <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
        <SwiperSlide><Card title="Card 1" content="This is the content of card 1." /></SwiperSlide>
      </Swiper>
  );
}