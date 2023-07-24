import styles from "./Sec.module.css";
import AsideItem from "./AsideItem";
import {
  VscHome,
  VscLayoutSidebarRightOff,
  VscMenu,
  VscEditorLayout,
} from "react-icons/vsc";

function NavSec() {
  return (
    <div className={styles.section}>
      <p>Navigation</p>
      <ul>
        <AsideItem
          title="Dashboard"
          list={["Default", "CRM", "Analytics"]}
          icon={<VscHome />}
        />
        <AsideItem title="Map" icon={<VscHome />}  />
        <AsideItem
          title="Page layout"
          list={["Vertical", "Horizontal", "Bottom Menu", "Box Layout", "RTL"]}
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

export default NavSec;
