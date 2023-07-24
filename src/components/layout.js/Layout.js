import { useState } from "react";
import styles from "./Layout.module.css";

//pic
import NavSec from "../elements/NavSec";
import UISec from "../elements/UISec";
import AppSec from "../elements/AppSec";
import FormSec from "../elements/FormSec";

function Layout({ children }) {
  return (
    <div className={styles.main_container}>
      <header className={styles.header}>
        <a href="/">Admin panel</a>
        <div className={styles.userProfile}>
          <img
            src={require(`../../data/users/${Math.floor(
              Math.random() * 10 + 1
            )}.jpg`)}
            alt={"profile"}
          />
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
