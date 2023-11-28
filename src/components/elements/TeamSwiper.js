import React from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperItem from "./SwiperItem";

//styles
import "swiper/css";
import "swiper/css/pagination";

export default function TeamSwiper() {
  const row = [];
  for (let i = 0; i < 10; i++) {
    row.push(i);
  }
  return (
    <div className="w-[calc(100%-15px)] mx-2  h-full rounded-lg bg-text-color-secondary text-text-color-primary p-4">
      <p className="bg-text-color-ssecondary text-text-color-primary mb-3">
        Team Members
      </p>
      <Swiper slidesPerView={"auto"} centeredSlides={false} spaceBetween={30}>
        {row.map((item) => (
          <SwiperSlide key={item} style={{ width: "fit-content" }}>
            <SwiperItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
