import React, { useState } from "react";

//functions
import { helper } from "../../utils/functions";

function ItemCard({ title, image, category, price }) {
  const [select, setSelect] = useState(false);
  const splitPrice = helper.seperatePrice(`${price}`);
  return (
    <div className="group relative w-full md:w-5/12 lg:w-2/12 mb-7 mx-1 bg-text-color-secondary rounded-2xl overflow-hidden transition-all hover:scale-x-105 before:content-[''] before:absolute before:-top-1/2 before:w-full before:h-full before:bg-bg-color-primary before:skew-y-[345deg] before:duration-500 hover:before:-top-2/3 hover:before:skew-y-[390deg]">
      <div className="relative w-9/12 flex mx-auto jestify-center items-start pt-5 z-1">
        <img src={image} alt="mouse corsair" className="w-full h-[200px]" />
      </div>

      <div className="relative p-5 flex justify-center items-center flex-col z-2">
        <h3 className="text-lg text-text-color-primary font-medium uppercase tracking-wide">
          {helper.shorten(title)}
        </h3>
        <h2 className="text-xl text-text-color-primary font-bold tracking-wide">
          {+splitPrice[0]}.{+splitPrice[1]}€
        </h2>
        <button
          onClick={() => setSelect(!select)}
          className={`relative ${
            select ? "-top-[15px] opacity-100" : "top-[100px]"
          } opacity-0 py-2.5 px-8 mt-4 text-text-color-secondary no-underline bg-bg-color-primary rounded-3xl uppercase tracking-wide duration-500 group-hover:-top-[15px] group-hover:opacity-100`}
        >
          {select ? "selected" : "ADD"}
        </button>
        <p className="absolute w-full bottom-2.5 font-semibold text-base text-center text-text-color-primary">
          {category}
        </p>
      </div>
    </div>
  );
}

export default ItemCard;
