import React from "react";

//charts
import LineChart from "../elements/charts/lineChart";
import CircleChart from "../elements/charts/circleChart";
import { Link } from "react-router-dom";

function SaleAnal() {
  return (
    <div className="w-full flex h-max flex-wrap lg:flex-nowrap justify-between items-start">
      <div className="lg:w-2/3 w-full h-[600px] mx-2 mb-5  rounded-lg bg-text-color-secondary text-text-color-primary p-4">
        <p className="font-bold">Sales Analytics</p>
        <p>
          For more details about usage, please refer{" "}
          <Link to="/#" className="text-text-color-tertiary no-underline">
            amCharts{" "}
          </Link>
          licences.
        </p>
        <LineChart />
      </div>
      <div className="lg:w-1/3 w-full h-[600px] mx-2 mb-5 rounded-lg bg-text-color-secondary text-text-color-primary p-4 flex flex-col items-center">
        <p>Project Risk</p>
        <CircleChart />
        <Link to="/#" className="text-text-color-tertiary no-underline">
          Change your risk
        </Link>
        <span className="flex w-full h-px bg-text-color-primary my-2.5"></span>
        <div className="w-full flex justify-between">
          <div className="w-1/2 p-2.5 text-center">
            <p>Nr</p>
            <p>AWS 2544</p>
          </div>
          <span className="flex w-px h-full bg-text-color-primary"></span>

          <div className="w-1/2 p-2.5 text-center">
            <p>Created</p>
            <p>30th Step</p>
          </div>
        </div>
        <button className="w-full p-4 bg-text-color-tertiary text-text-color-secondary text-base outline-none border-none mt-4 rounded-b-lg cursor:pointer ">
          Download report
        </button>
      </div>
    </div>
  );
}

export default SaleAnal;
