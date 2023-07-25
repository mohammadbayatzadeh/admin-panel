import styles from "./Sec.module.css";
import AsideItem from "./AsideItem";
import {
  VscTerminalDebian,
  VscMultipleWindows,
  VscLoading,
  VscLayoutSidebarRightOff,
} from "react-icons/vsc";

function UISec() {
  return (
    <div className={styles.section}>
      <p>UI Element</p>
      <ul>
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
