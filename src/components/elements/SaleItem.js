import React from "react";

//chart
import ChangeChart from "./charts/ChangeChart";

function SaleItem({ head }) {
  return (
    <div class="w-full grid text-xs lg:text-base grid-rows-1 grid-cols-12 justify-center justify-items-center items-center py-2.5 rounded-lg transition-all hover:bg-bg-color-secondary">
      <div class="ml-2.5 justify-self-start col-span-4">
        {head ? (
          <p class="font-semibold">Application</p>
        ) : (
          <>
            <p class="font-semibold">Able Pro</p>
            <p class="text-sm">Powerful Admin Theme</p>
          </>
        )}
      </div>
      <p class="col-span-2">
        {head ? "Sales" : Math.floor(Math.random() * 10000)}
      </p>
      <p class="col-span-2">{head ? "Change" : <ChangeChart />}</p>
      <p class="col-span-2">
        {head ? "Avg Price " : Math.floor(Math.random() * 100)}
      </p>
      <p class="col-span-1">
        {head ? "Total" : Math.floor(Math.random() * 10000)}
      </p>
    </div>
  );
}

export default SaleItem;
