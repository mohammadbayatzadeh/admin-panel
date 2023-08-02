import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import styles from "./TeamSwiper.module.css";
import { usersData } from "../../data/users/usersData";

const TeamSwiperItem = () => {
  const users = usersData;
  return (
    <div className={styles.itemContainer}>
      <img
        src={require(`../../data/users/${Math.floor(
          Math.random() * 10 + 1
        )}.jpg`)}
      />
      <p>{users[Math.floor(Math.random() * 10)].name}</p>
    </div>
  );
};


export default function TeamSwiper() {
  return (
    <div className={styles.container}>
      <p>Team Members</p>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide >
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
