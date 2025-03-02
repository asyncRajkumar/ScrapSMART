import React from 'react';
import "./slider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Add ionicons import
import { IonIcon } from 'ionicons';

// Update Swiper imports for v9+ compatibility
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Slider() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false, // Disable shadows since we hid them
        }}
        pagination={{ 
          el: '.swiper-pagination', 
          clickable: true,
          type: 'bullets',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {/* ... Your SwiperSlides ... */}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IonIcon name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <IonIcon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;