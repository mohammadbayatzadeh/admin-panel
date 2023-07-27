import React from "react";
import styles from "./ItemCard.module.css";
import { shorten } from "../../functions/functions";

function ItemCard({ title, image, category }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img src={image} alt="mouse corsair" className={styles.mouse} />
      </div>

      <div className={styles.contentBox}>
        <h3>{shorten(title)}</h3>
        <h2 className={styles.price}>
          61.<small>98</small> €
        </h2>
        <a href="#" className={styles.buy}>
          ADD
        </a>
        <p className={styles.backText}>{category}</p>
      </div>
    </div>
  );
}

export default ItemCard;
