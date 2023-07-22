import React, { useState } from "react";
import styles from "./AsideItem.module.css";

function AsideItem({ title, list = [], icon }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <li onClick={() => setIsShow(!isShow)} className={styles.item}>
      <a href="/#" className={styles.topTitle}>
        {icon} <span>{title}</span>
      </a>
      {list.length > 0 && (
        <>
          {list.map((item) => (
            <div
              className={
                isShow ? `${styles.subList} ${styles.active}` : styles.subList
              }
            >
              <a
                key={item}
                href="/#"
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
