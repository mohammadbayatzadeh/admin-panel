import { useRef } from "react";

//styles
import styles from "./Layout.module.css";

//elements
import AppSec from "../elements/aside/AppSec";
import NavSec from "../elements/aside/NavSec";
import UISec from "../elements/aside/UISec";
import FormSec from "../elements/aside/FormSec";

//icons
import {
  VscSignOut,
  VscSettingsGear,
  VscBellDot,
  VscSearch,
} from "react-icons/vsc";

const LayoutButton = ({ href, children }) => {
  if (href)
    return (
      <a className={styles.LayoutButton} href={href}>
        {children}
      </a>
    );
  return <div className={styles.LayoutButton}>{children}</div>;
};

function Layout({ children }) {
  const ref = useRef();

  const searchHandler = () => {
    if (ref.current.value.length > 0) {
      console.log(ref.current.value);
      ref.current.value = "";
    } else {  
      ref.current.focus();
    }
  };

  return (
    <div className={styles.main_container}>
      <header className={styles.header}>
        <a href="/ " className={styles.logo}>
          Admin Panel
        </a>
        <LayoutButton href="/contact">
          <img src={require(`../../data/users/profile.jpeg`)} alt={"profile"} />
        </LayoutButton>
        <div className={styles.searchBox} onClick={() => searchHandler()}>
          <LayoutButton>
            <VscSearch />
          </LayoutButton>
          <input
            ref={ref}
            onChange={(e) => (ref.current.value = e.target.value)}
          />
        </div>
        <LayoutButton>
          <p className={styles.counter}>{Math.floor(Math.random() * 10)}</p>
          <VscBellDot />
        </LayoutButton>
        <LayoutButton>
          <VscSettingsGear />
        </LayoutButton>
        <LayoutButton>
          <VscSignOut />
        </LayoutButton>
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
