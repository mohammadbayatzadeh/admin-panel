import styles from "./Sec.module.css";
import AsideItem from "./AsideItem";
import { VscHome, VscMap, VscAccount } from "react-icons/vsc";

function NavSec() {
  return (
    <div className={styles.section}>
      <p>Main </p>
      <ul>
        <AsideItem title="Dashboard" icon={<VscHome />} href="/" />
        <AsideItem title="Map" icon={<VscMap />} href="/map" />

        <AsideItem title="Contact Me" icon={<VscAccount />} href="/contact" />
      </ul>
    </div>
  );
}

export default NavSec;
