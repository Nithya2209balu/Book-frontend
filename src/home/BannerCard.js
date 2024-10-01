import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './BannerCard.css';



// import required modules
import { EffectCards } from 'swiper/modules';

function BannerCard() {
  return (
    <div className='banner '>
      <dotlottie-player
       src="https://lottie.host/8cab8857-d531-4d83-a9a9-1b93d6ac18b4/McA6NQ2v1w.json"
       background="transparent" 
       speed="1" 
        loop autoplay></dotlottie-player>
    </div>
  )
}

export default BannerCard