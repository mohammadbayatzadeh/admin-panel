import React, { Suspense, lazy, useEffect } from "react";

//styles
import Loading from "../../modules/Loading";

//comps
const Tag = lazy(() => import("../../elements/Tag"));
const SaleAnal = lazy(() => import("../../modules/SaleAnal"));
const AppSales = lazy(() => import("../../modules/AppSales"));

//swiper
const TeamSwiper = lazy(() => import("../../elements/TeamSwiper"));

function HomePage() {
  useEffect(() => {
    document.title = "Admin Panel";
  }, []);
  return (
    <div className="w-full flex flex-col h-max flex-wrap justify-between items-start">
      <Suspense fallback={<Loading />}>
        <div className=" w-[calc(100%-20px)] sm:w-full flex h-max justify-between flex-wrap lg:flex-nowrap">
          <div className="w-full flex flex-col flex-wrap sm:flex-row sm:flex-nowrap">
            <Tag number="$32000" title="All Earning" />
            <Tag number="290+" title="Page Views" />
          </div>
          <div className="w-full flex flex-col flex-wrap sm:flex-row sm:flex-nowrap">
            <Tag number={145} title="Task Completed" />
            <Tag number={500} title="Downloads" />
          </div>
        </div>
        <SaleAnal />
        <AppSales />
        <TeamSwiper />
      </Suspense>
    </div>
  );
}

export default HomePage;
