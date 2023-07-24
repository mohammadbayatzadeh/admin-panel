import React from "react";
import styles from "./SaleItem.module.css";
import ChangeChart from "./charts/ChangeChart";

function SaleItem({ head }) {
  return (
    <div className={styles.container}>
      <input type="checkbox" />
      <div className={styles.first}>
        {head ? (
          <p className={styles.top}>Application</p>
        ) : (
          <>
            <p className={styles.top}>Able Pro</p>
            <p className={styles.sub}>Powerful Admin Theme</p>
          </>
        )}
      </div>
      {head ? <p>Sales</p> : <p>{Math.floor(Math.random() * 10000)}</p>}
      {head ? <p>Change</p> : <ChangeChart />}
      {head ? <p>Avg Price</p> : <p>${Math.floor(Math.random() * 100)}</p>}
      {head ? <p>Total</p> : <p>${Math.floor(Math.random() * 10000)}</p>}
    </div>
  );
}

export default SaleItem;
