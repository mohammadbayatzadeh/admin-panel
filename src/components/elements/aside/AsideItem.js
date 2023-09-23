import React, { useState } from "react";

//icons
import { VscArrowSmallDown } from "react-icons/vsc";

function AsideItem({ title, list = [], icon, href = "#" }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <li
      onClick={() => setIsShow(!isShow)}
      className="group flex flex-col text-left mt-2.5 "
    >
      <a
        href={href}
        className="flex items-start z-1 py-1 rounded-l-md text-text-color-primary no-underline transition-all "
      >
        <span className={title === "Animations" ? "animate-spin" : null}>
          {icon}
        </span>
        <p className="!text-sm leading-3 ml-1 mr-auto transition-all group-hover:translate-x-1">
          {title}
        </p>
        {list.length > 0 && <VscArrowSmallDown />}
      </a>
      {list.length > 0 && (
        <>
          {list.map((item, index) => (
            <div
              key={index}
              className={`
            pl-5 absolute invisible transition-all 
            ${isShow ? "flex relative !visible" : ""}
            `}
            >
              <a
                key={item}
                href={href}
                className={`w-full py-1 my-1 !text-xs opacity-0 -translate-x-5 transition-all ${
                  isShow ? "opacity-100 translate-x-0" : ""
                }`}
              >
                {`> ${item}`}
              </a>
            </div>
          ))}
        </>
      )}
    </li>
  );
}

export default AsideItem;
