// src/Carousel/Carousel.js
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AlbumCard from '../Card';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Carousel = ({ items = [], isSongSection = false }) => {
  const swiperRef = useRef(null);

  return (
    <div style={{ position: 'relative' }}>
      <LeftArrow onClick={() => swiperRef.current?.slidePrev()} />
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        style={{ padding: '20px 40px' }}
      >
        {items && items.length > 0 ? (
          items.map((item) => (
            <SwiperSlide key={item.id}>
              <AlbumCard item={item} isSong={isSongSection} />
            </SwiperSlide>
          ))
        ) : (
          <div>No data available</div>
        )}
      </Swiper>
      <RightArrow onClick={() => swiperRef.current?.slideNext()} />
    </div>
  );
};

export default Carousel;
