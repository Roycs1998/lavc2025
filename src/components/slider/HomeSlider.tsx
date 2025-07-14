'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

import { Autoplay } from 'swiper/modules'

export const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='imageContainer'>
            <img src='/images/banners/1.jpg' alt='banner 1' className='image w-full h-screen object-cover' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imageContainer'>
            <img src='/images/banners/2.jpg' alt='banner 1' className='image w-full h-screen object-cover' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imageContainer'>
            <img src='/images/banners/3.jpg' alt='banner 1' className='image w-full h-screen object-cover' />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
