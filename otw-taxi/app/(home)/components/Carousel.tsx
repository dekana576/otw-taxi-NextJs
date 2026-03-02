"use client";

import { Image } from "@heroui/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      spaceBetween={20}
      slidesPerView={1}
      className="w-full h-full rounded-4xl max-h-80"
    >
      <SwiperSlide>
        <div className="flex justify-center items-center">
          <Image
            src="carousel/image2.png"
            alt=""
            width={1000}
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
          <Image
            src="carousel/image1.png"
            alt=""
            width={1000}
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
          <Image
            src="carousel/image1.png"
            alt=""
            width={1000}
            className="object-contain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
