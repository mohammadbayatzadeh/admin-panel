import styles from "./Sec.module.css";
import AsideItem from "./AsideItem";
import {
  VscHome,
  VscLayoutSidebarRightOff,
  VscMenu,
  VscEditorLayout,
} from "react-icons/vsc";

function UISec() {
  return (
    <div className={styles.section}>
      <p>UI Element</p>
      <ul>
        <AsideItem
          title="Basic Components"
          list={["Alerrt", "Button", "Accordion"]}
          icon={<VscHome />}
        />
        <AsideItem
          title="Page layout"
          list={["Vertical", "Horizontal", "Bottom Menu", "Box Layout", "RTl"]}
          icon={<VscLayoutSidebarRightOff />}
        />
        <AsideItem title="Navigation" icon={<VscMenu />} />
        <AsideItem
          title="Widget"
          icon={<VscEditorLayout />}
          list={["Static", "Data", "Chart Widget"]}
        />
      </ul>
    </div>
  );
}

export default UISec;
