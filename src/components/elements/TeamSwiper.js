import React from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

//data
import { usersData } from "../../data/users/usersData";

const TeamSwiperItem = () => {
  const users = usersData;
  return (
    <div className="flex flex-col items-center bg-text-color-secondary h-[250px] w-[250px] text-text-color-primary ">
      <img
        src={require(`../../data/users/${Math.floor(
          Math.random() * 10 + 1
        )}.jpg`)}
        alt="team member"
        className="w-11/12 h-11/12 rounded-3xl border-2 border-solid border-[var(--text-color-primary)]"
      />
      <p className="bg-text-color-ssecondary text-text-color-primary mt-2.5">
        {users[Math.floor(Math.random() * 10)].name}
      </p>
    </div>
  );
};

export default function TeamSwiper() {
  return (
    <div className="w-[calc(100%-15px)] mx-2  h-full rounded-lg bg-text-color-secondary text-text-color-primary p-4">
      <p className="bg-text-color-ssecondary text-text-color-primary mb-3">
        Team Members
      </p>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide>
          <TeamSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
