import React from "react";

//comps
import SaleItem from "../elements/SaleItem";
import Message from "../elements/Message";
import { Link } from "react-router-dom";

function AppSales() {
  return (
    <div className="w-full flex  flex-wrap lg:flex-nowrap  justify between items-start">
      <div className="w-full lg:w-1/2  mx-2 mb-5 rounded-lg bg-text-color-secondary text-text-color-primary p-4">
        <p className="font-semibold">Application Sales</p>
        <SaleItem head={true} />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <Link
          to="/#"
          className="no-underline block text-text-color-tertiary text-center"
        >
          View all Projects
        </Link>
      </div>
      <div className="lg:w-1/2 w-full mx-2 mb-5 rounded-lg bg-text-color-secondary text-text-color-primary p-4">
        <p className="font-semibold">User Activity</p>
        <Message />
        <Message />
        <Message />
        <Message />
        <Link
          to="/#"
          className="no-underline block text-text-color-tertiary text-center mt-auto"
        >
          View all Projects
        </Link>
      </div>
    </div>
  );
}

export default AppSales;
