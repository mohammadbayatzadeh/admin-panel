import React from "react";
import styles from "./ItemCard.module.css";

function ItemCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img
          src={require("../../data/users/1.jpg")}
          alt="mouse corsair"
          className={styles.mouse}
        />
      </div>

      <div className={styles.contentBox}>
        <h3>mamad</h3>
        <h2 className={styles.price}>
          61.<small>98</small> €
        </h2>
        <a href="#" className={styles.buy}>
          ADD
        </a>
      </div>
    </div>
  );
}

export default ItemCard;
