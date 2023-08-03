//styles
import styles from "./Sec.module.css";

//comps
import AsideItem from "./AsideItem";

//icons
import { VscHome, VscMap, VscAccount, VscPackage } from "react-icons/vsc";

function NavSec() {
  return (
    <div className={styles.section}>
      <p>Main </p>
      <ul>
        <AsideItem title="Dashboard" icon={<VscHome />} href="/" />
        <AsideItem title="Map" icon={<VscMap />} href="/map" />
        <AsideItem
          title="Manage Items"
          icon={<VscPackage />}
          href="/manage-items"
        />

        <AsideItem title="Contact Me" icon={<VscAccount />} href="/contact" />
      </ul>
    </div>
  );
}

export default NavSec;
