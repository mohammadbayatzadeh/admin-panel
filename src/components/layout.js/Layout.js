import { useState } from "react";
import styles from "./Layout.module.css";

//pic
import { usersData } from "../../data/users/usersData";
import { VscArrowSmallDown } from "react-icons/vsc";
import profile from "../../data/users/1.jpg";
import DropDown from "../modules/DropDown";
import NavSec from "../elements/NavSec";
import UISec from "../elements/UISec";

function Layout({ children }) {
  const [settingIsShow, setSettingIsShow] = useState(false);
  return (
    <div className={styles.main_container}>
      <header className={styles.header}>
        <p>Todo App Project</p>
        <div
          className={styles.userProfile}
          onClick={() => setSettingIsShow(!settingIsShow)}
        >
          <img src={profile} />
          <span>{usersData[0].name}</span>
          <VscArrowSmallDown style={{ transform: "translateY(2px)" }} />
          <DropDown isShow={settingIsShow} />
        </div>
      </header>
      <div className={styles.container}>
        <input type="checkbox" id="hamburger" name="hamburger" />
        <label htmlFor="hamburger" className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <aside className={styles.aside}>
          <NavSec />
          <UISec />
        </aside>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
