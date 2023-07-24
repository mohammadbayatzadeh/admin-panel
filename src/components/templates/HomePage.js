import React from "react";
import styles from "./HomePage.module.css";
import Tag from "../elements/Tag";
import SaleAnal from "../modules/SaleAnal";
import AppSales from "../modules/AppSales";
import Contact from "../elements/Contact";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Tag number="$32000" title="All Earning" />
        <Tag number="290+" title="Page Views" />
        <Tag number={145} title="Task Completed" />
        <Tag number={500} title="Downloads" />
      </div>
      <SaleAnal />
      <AppSales />
      <Contact />
    </div>
  );
}

export default HomePage;
