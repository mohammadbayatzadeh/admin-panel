import React from "react";

//comps
import SaleItem from "../elements/SaleItem";
import Message from "../elements/Message";

function AppSales() {
  return (
    <div class="w-full flex  flex-wrap lg:flex-nowrap  justify between items-start">
      <div class="w-full lg:w-1/2  mx-2 mb-5 rounded-lg bg-text-color-secondary text-text-color-primary p-4">
        <p class="font-semibold">Application Sales</p>
        <SaleItem head={true} />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <a
          href="/#"
          class="no-underline block text-text-color-tertiary text-center"
        >
          View all Projects
        </a>
      </div>
      <div class="lg:w-1/2 w-full mx-2 mb-5 rounded-lg bg-text-color-secondary text-text-color-primary p-4">
        <p class="font-semibold">User Activity</p>
        <Message />
        <Message />
        <Message />
        <Message />
        <a
          href="/#"
          class="no-underline block text-text-color-tertiary text-center mt-auto"
        >
          View all Projects
        </a>
      </div>
    </div>
  );
}

export default AppSales;
