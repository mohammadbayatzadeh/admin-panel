import React, { useRef, useState } from "react";

//icons
import { VscArrowSmallDown } from "react-icons/vsc";
import { Link } from "react-router-dom";

function AsideItem({ title, list = [], icon, href = "#" }) {
  const [isShow, setIsShow] = useState(false);
  const contentEl = useRef();

  return (
    <li
      onClick={() => setIsShow(!isShow)}
      className="group flex flex-col text-left mt-2.5 "
    >
      <Link
        to={href}
        className="flex items-start z-1 py-1 rounded-l-md text-text-color-primary no-underline transition-all "
      >
        <span
          className={
            title === "Animations" || title === "Icons" ? "animate-spin" : null
          }
        >
          {icon}
        </span>
        <p className="!text-sm leading-3 ml-1 mr-auto transition-all group-hover:translate-x-1">
          {title}
        </p>
        {list.length > 0 && <VscArrowSmallDown />}
      </Link>
      {list.length > 0 && (
        <>
          {list.map((item, index) => (
            <div
              key={index}
              style={
                isShow
                  ? { height: contentEl.current.scrollHeight + 14 }
                  : { height: "0px" }
              }
              ref={contentEl}
              className={`
            pl-3 transition-all h-0 overflow-hidden
            ${isShow ? " h-auto" : ""}
            `}
            >
              <Link key={item} to={href} className="w-full !text-xs">
                {`> ${item}`}
              </Link>
            </div>
          ))}
        </>
      )}
    </li>
  );
}

export default AsideItem;
