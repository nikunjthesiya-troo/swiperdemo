"use client"
import { SPECIAL_MOMENT } from '@/constants'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import SectionHeading from '../molecules/SectionHeading';
import Button from '../atoms/Button';

const SpecialMoment = () => {
  return (
    <div className='w-full bg-theme-white flex flex-col items-center gap-12 pb-12'>
      <div className='min-h-[300px] w-full overflow-hidden'>
        <div className='carousel-container'>
          <Swiper
            spaceBetween={-30}
            centeredSlides={true}
            slidesPerView={4.5}
            loop={true}
            grabCursor={true}
            effect="creative"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCreative, Autoplay]}
            creativeEffect={{
              perspective: true,
              limitProgress: 3,
              prev: {
                translate: ['-70%', -40, 0],
                rotate: [0, 20, 0],
                origin: "top"
              },
              next: {
                translate: ['70%', -40, 0],
                rotate: [0, -20, -0],
                origin: "top"
              },
            }}
            breakpoints={{
              520: {
                slidesPerView: 5,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5.5,
              },
            }}
          >
            {
              SPECIAL_MOMENT.map((img, i) => (
                <SwiperSlide key={i} className='flex items-center justify-center pt-28 lg:pt-20'>
                  <Image
                    src={img}
                    className='object-cover w-[120px] h-[165px] sm:h-[330px] sm:w-[190px] rounded-2xl'
                    width={300}
                    height={450}
                    alt={`Special Moment ${i + 1}`}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
      <div className='main-container w-full flex flex-col items-center gap-4 text-center'>
        <SectionHeading
          heading="Trust us with your special moments"
          summary={
            <>
              We’re all about bringing joy, fun, and a personal touch to every occasion, making sure your special moments<br className='lg:block hidden' /> are truly unforgettable.
            </>
          }
        />
        <Button> Elevate your events </Button>
      </div>
    </div>
  )
}

export default SpecialMoment