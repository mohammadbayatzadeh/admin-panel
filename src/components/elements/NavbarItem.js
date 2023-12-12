import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ href = false, children, extClass }) => {
  if (href)
    return (
      <Link
        className={`flex justify-center items-center w-[30px] h-[30px] text-text-color-secondary rounded-lg ml-1 cursor-pointer border-2 border-solid border-text-color-secondary ${extClass}`}
        to={href}
      >
        {children}
      </Link>
    );
  return (
    <div
      className={`flex justify-center items-center w-[30px] h-[30px] text-text-color-secondary rounded-lg ml-1 cursor-pointer border-2 border-solid border-text-color-secondary ${extClass}`}
    >
      {children}
    </div>
  );
};

export default NavbarItem;
