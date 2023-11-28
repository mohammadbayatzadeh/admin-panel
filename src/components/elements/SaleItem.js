import React from "react";

//chart
import ChangeChart from "./charts/ChangeChart";

function SaleItem({ head }) {
  return (
    <div className="w-full grid text-xs lg:text-base grid-rows-1 grid-cols-12 justify-center justify-items-center items-center py-2.5 rounded-lg transition-all hover:bg-bg-color-secondary">
      <div className="ml-2.5 justify-self-start col-span-4">
        {head ? (
          <p className="font-semibold">Application</p>
        ) : (
          <>
            <p className="font-semibold">Able Pro</p>
            <p className="text-sm">Powerful Admin Theme</p>
          </>
        )}
      </div>
      <p className="col-span-2">
        {head ? "Sales" : Math.floor(Math.random() * 10000)}
      </p>
      <p className="col-span-2">{head ? "Change" : <ChangeChart />}</p>
      <p className="col-span-2">
        {head ? "Avg Price " : Math.floor(Math.random() * 100)}
      </p>
      <p className="col-span-1">
        {head ? "Total" : Math.floor(Math.random() * 10000)}
      </p>
    </div>
  );
}

export default SaleItem;
