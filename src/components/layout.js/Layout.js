import styles from "./Layout.module.css";

//pic
import NavSec from "../elements/NavSec";
import UISec from "../elements/UISec";
import AppSec from "../elements/AppSec";
import FormSec from "../elements/FormSec";
import { VscSignOut, VscSettingsGear, VscBellDot } from "react-icons/vsc";

function Layout({ children }) {
  return (
    <div className={styles.main_container}>
      <header className={styles.header}>
        <a href="/ " className={styles.logo}>
          Admin Panel
        </a>
        <a className={styles.userProfile} href="/me">
          <img
            src={require(`../../data/users/${Math.floor(
              Math.random() * 10 + 1
            )}.jpg`)}
            alt={"profile"}
          />
        </a>
        <div className={styles.userProfile}>
          <p className={styles.counter}>{Math.floor(Math.random() * 10)}</p>
          <VscBellDot />
        </div>
        <div className={styles.userProfile}>
          <VscSettingsGear />
        </div>
        <div className={styles.userProfile}>
          <VscSignOut />
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
          <AppSec />
          <FormSec />
        </aside>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
