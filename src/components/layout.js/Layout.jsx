import { useEffect, useRef, useState } from "react";

//elements
import AppSec from "../elements/aside/AppSec";
import NavSec from "../elements/aside/NavSec";
import UISec from "../elements/aside/UISec";
import FormSec from "../elements/aside/FormSec";

//icons
import Sun from "../icons/Sun";
import Moon from "../icons/Moon";
import {
  VscSignOut,
  VscSettingsGear,
  VscBellDot,
  VscSearch,
} from "react-icons/vsc";

//profile
import profile from "../../data/users/profile.jpeg";

function Layout({ children }) {
  const ref = useRef();
  const [mode, setMode] = useState("light");
  const storedMode = localStorage.getItem("mode");
  const [show, setShow] = useState(true);
  if (storedMode == null) {
    localStorage.setItem("mode", "light");
    setMode("light");
  }
  useEffect(() => {
    setMode(storedMode);
  }, []);

  const themeHandler = () => {
    if (storedMode === "light" || storedMode === null) {
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  };

  const searchHandler = () => {
    if (ref.current.value.length > 0) {
      ref.current.value = "";
    } else {
      ref.current.focus();
    }
  };

  return (
    <div
      className="fixed w-full bg-bg-color-secondary min-h-screen transition-all"
      id={[mode]}
    >
      <header className="fixed flex items-center w-full bg-bg-color-primary px-2.5">
        <a
          href="/ "
          className="no-underline text-sm sm:text-3xl text-text-color-secondary mt-2.5 mb-5 ml-1 mr-auto"
        >
          Admin Panel
        </a>
        <span onClick={() => themeHandler()}>
          {mode === "light" ? <Sun /> : <Moon />}
        </span>
        <NavbarButton href="/contact">
          <img
            src={profile}
            alt={"profile"}
            className="w-full h-full rounded-lg"
          />
        </NavbarButton>
        <div
          className="h-[30px] w-fit flex border-2 border-solid border-text-color-secondary rounded-lg ml-1"
          onClick={() => searchHandler()}
        >
          <a
            className="flex justify-center items-center w-[30px] h-[30px] text-text-color-secondary rounded-lg ml-0 cursor-pointer "
            href="/#"
          >
            <VscSearch />
          </a>
          <input
            ref={ref}
            onChange={(e) => (ref.current.value = e.target.value)}
            className="w-0 border-none outline-none m-0 p-0 rounded-r-md transition-all text-black focus:p-1 focus:w-[100px]"
          />
        </div>
        <NavbarButton extClass=" !hidden md:!flex">
          <p className="absolute translate-x-1.5 -translate-y-1 w-[12px] h-[12px] text-center bg-text-color-tertiary rounded-full text-[7px]">
            {Math.floor(Math.random() * 10)}
          </p>
          <VscBellDot />
        </NavbarButton>
        <NavbarButton extClass=" !hidden md:!flex">
          <VscSettingsGear />
        </NavbarButton>
        <NavbarButton>
          <VscSignOut />
        </NavbarButton>
      </header>
      <div className="flex w-full h-screen">
        <div
          className={`fixed top-[55px] left-[170px] w-[20px] h-[20px] flex justify-between flex-col items-center z-20 transition-all duration-700 cursor-pointer ${
            !show ? "!left-5" : ""
          }`}
          onClick={() => setShow(!show)}
        >
          <span
            className={`w-full h-0.5 bg-text-color-primary rounded-sm transition-all translate-y-2 rotate-45 ${
              !show ? "!w-1/2 !translate-y-1.5 translate-x-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-text-color-primary rounded-sm transition-all -rotate-45 ${
              !show ? "rotate-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-text-color-primary rounded-sm transition-all opacity-0 ${
              !show
                ? "opacity-100 !w-1/2 -translate-y-1.5 translate-x-2 -rotate-45"
                : ""
            }`}
          ></span>
        </div>
        <aside
          className={`fixed translate-x-0 top-[50px] border-2 border-solid border-white rounded-r-xl py-6 w-[200px] h-[calc(100vh-10vh)] text-text-color-primary transition-all z-10 backdrop-blur overflow-y-scroll  scrollbar-none ${
            !show ? "!-translate-x-[180px]" : ""
          }`}
        >
          <NavSec />
          <UISec />
          <AppSec />
          <FormSec />
        </aside>
        <div
          className={`flex min-w-[calc(100vw)] md:min-w-[calc(100vw-180px)] mt-[70px] translate-x-[10px] md:ml-[190px] md:translate-x-0 pt-2.5 px-2.5 pb-[100px] min-h-fit transition-all overflow-y-scroll  scrollbar-none ${
            !show ? "md:!-translate-x-[180px] md:!min-w-[calc(100vw)]" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;

const NavbarButton = ({ href, children, extClass }) => {
  if (href)
    return (
      <a
        className={`flex justify-center items-center w-[30px] h-[30px] text-text-color-secondary rounded-lg ml-1 cursor-pointer border-2 border-solid border-text-color-secondary ${extClass}`}
        href={href}
      >
        {children}
      </a>
    );
  return (
    <div
      className={`flex justify-center items-center w-[30px] h-[30px] text-text-color-secondary rounded-lg ml-1 cursor-pointer border-2 border-solid border-text-color-secondary ${extClass}`}
    >
      {children}
    </div>
  );
};
