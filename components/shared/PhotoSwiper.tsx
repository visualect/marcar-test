'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'

interface IPhotoSwiper {
  images: string[]
}

export default function PhotoSwiper({ images }: IPhotoSwiper) {
  return (
    <div className="w-full h-auto aspect-retro rounded-2xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        watchOverflow
        lazyPreloadPrevNext={3}
        pagination={{
          enabled: true,
          dynamicBullets: true,
          dynamicMainBullets: 6,
        }}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={src}>
            <img
              alt={'photo-' + idx}
              src={src}
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
