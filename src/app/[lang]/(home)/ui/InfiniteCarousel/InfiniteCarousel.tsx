'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'

import './styles.css'

interface Props {
  items: string[]
  reserveDirection?: boolean
}

const InfiniteCarousel = ({ items, reserveDirection = false }: Props) => {
  return (
    <div className='space-y-6 relative'>
      <div className='absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-backgroundDefault to-transparent pointer-events-none z-10'></div>
      <div className='absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-backgroundDefault to-transparent pointer-events-none z-10'></div>

      <Swiper
        className='sample-slider'
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: reserveDirection,
          stopOnLastSlide: false
        }}
        slidesPerView={'auto'}
        speed={3000}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className='w-40 h-20 flex-shrink-0 flex items-center justify-center shadow-sm hover:shadow rounded  px-4 py-2 m-2 ease-in-out duration-300 bg-backgroundPaper'
          >
            <div className='relative w-full h-full'>
              <Image
                src={"https://tlavc-peru.org/"+item}
                alt={`Logo ${index + 1}`}
                fill
                className='object-contain'
                sizes='(max-width: 768px) 40vw, 20vw'
                loading='lazy'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default InfiniteCarousel
