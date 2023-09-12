import React, { Suspense, lazy } from "react";

//styles
import styles from "./HomePage.module.css";

//comps
const Tag = lazy(() => import("../elements/Tag"));
const SaleAnal = lazy(() => import("../modules/SaleAnal"));
const AppSales = lazy(() => import("../modules/AppSales"));

//swiper
const TeamSwiper = lazy(() => import("../elements/TeamSwiper"));

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
      <Suspense fallback={<div>loading...</div>}>
        <AppSales />
        <TeamSwiper />
      </Suspense>
    </div>
  );
}

export default HomePage;
