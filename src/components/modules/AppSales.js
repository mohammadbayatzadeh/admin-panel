import React, { useEffect } from "react";

//styles
import styles from "./AppSales.module.css";

//comps
import SaleItem from "../elements/SaleItem";
import Message from "../elements/Message";

function AppSales() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>Application Sales</p>
        <SaleItem head={true} />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <a href="/#">View all Projects</a>
      </div>
      <div className={styles.right}>
        <p>User Activity</p>
        <Message />
        <Message />
        <Message />
        <Message />
        <a href="/#">View all Projects</a>
      </div>
    </div>
  );
}

export default AppSales;
