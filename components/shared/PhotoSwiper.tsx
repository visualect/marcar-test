'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

interface IPhotoSwiper {
  images: string[]
  bookingAllowed: boolean
}

export default function PhotoSwiper({ images, bookingAllowed }: IPhotoSwiper) {
  return (
    <div className="relative w-full h-auto aspect-retro rounded-2xl overflow-hidden">
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
              loading="lazy"
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
      {bookingAllowed && (
        <div className="absolute top-2 right-2 rounded-[10px] px-2 py-1 text-xs font-semibold text-white bg-emerald-500 z-10">
          Можно забронировать
        </div>
      )}
    </div>
  )
}
