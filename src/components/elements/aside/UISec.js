import React from "react";

//comps
import AsideItem from "./AsideItem";

//icons
import {
  VscTerminalDebian,
  VscMultipleWindows,
  VscLoading,
  VscLayoutSidebarRightOff,
} from "react-icons/vsc";

function UISec() {
  return (
    <div className="mb-7 ml-4 text-text-color-primary">
      <p className="text-xl font-semibold mb-2.5">UI Element</p>
      <ul className="list-none">
        <AsideItem
          title="Basic Components"
          list={["Alert", "Button", "Accordion"]}
          icon={<VscMultipleWindows />}
        />
        <AsideItem
          title="Page layout"
          list={["Vertical", "Horizontal", "Bottom Menu", "Box Layout", "RTL"]}
          icon={<VscLayoutSidebarRightOff />}
        />

        <AsideItem title="Animations" icon={<VscTerminalDebian />} />
        <AsideItem
          title="Icons"
          icon={<VscLoading />}
          list={["Font Awesome", "Themify", "Material Design", "Flags"]}
        />
      </ul>
    </div>
  );
}

export default UISec;
