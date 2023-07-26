import React, { useState } from "react";
import styles from "./AsideItem.module.css";
import { VscArrowSmallDown } from "react-icons/vsc";

function AsideItem({ title, list = [], icon, href = '/#' }) {
  const [isShow, setIsShow] = useState(false);
  const [anime, setAnime] = useState(false);
  return (
    <li
      onClick={() => setIsShow(!isShow)}
      className={styles.item}
      onMouseEnter={() => setAnime(true)}
      onMouseLeave={() => setAnime(false)}
    >
      <a href={href} className={styles.topTitle}>
        <span
          className={
            title === "Animations"
              ? styles.animation
              : anime ? styles.animation : null
          }
        >
          {icon}
        </span>
        <span className={styles.title}>{title}</span>
        {list.length > 0 && <VscArrowSmallDown />}
      </a>
      {list.length > 0 && (
        <>
          {list.map((item ,index) => (
            <div
            key={index  }
              className={
                isShow ? `${styles.subList} ${styles.active}` : styles.subList
              }
            >
              <a
                key={item}
                href={href}
                className={
                  isShow
                    ? `${styles.subTitle} ${styles.active}`
                    : styles.subTitle
                }
              >
                {`> ${item}`}
              </a>
            </div>
          ))}
        </>
      )}
    </li>
  );
}

export default AsideItem;
