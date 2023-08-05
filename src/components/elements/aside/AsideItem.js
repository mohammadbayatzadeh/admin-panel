import React, { useState } from "react";

//icons
import { VscArrowSmallDown } from "react-icons/vsc";

//styles
import styles from "./AsideItem.module.css";

function AsideItem({ title, list = [], icon, href = "#" }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <li onClick={() => setIsShow(!isShow)} className={styles.item}>
      <a href={href} className={styles.topTitle}>
        <span className={title === "Animations" ? styles.animation : null}>
          {icon}
        </span>
        <p className={styles.title}>{title}</p>
        {list.length > 0 && <VscArrowSmallDown />}
      </a>
      {list.length > 0 && (
        <>
          {list.map((item, index) => (
            <div
              key={index}
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
