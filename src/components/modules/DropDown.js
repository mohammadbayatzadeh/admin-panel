import styles from "./DropDown.module.css";

import {
  VscSettingsGear,
  VscSignOut,
  VscAccount,
  VscLock,
  VscCommentDiscussion,
} from "react-icons/vsc";

function DropDown({ isShow }) {
  if (isShow)
    return (
      <div className={styles.dropDontainer}>
        <a href="/#">
          <VscSettingsGear />
          <span>Setting</span>
        </a>
        <a href="/#">
          <VscAccount />
          <span>Profile</span>
        </a>
        <a href="/#">
          <VscCommentDiscussion />
          <span>My Messages</span>
        </a>
        <a href="/#">
          <VscLock />
          <span>Lock Screen</span>
        </a>
        <a href="/#">
          <VscSignOut />
          <span>Logout</span>
        </a>
      </div>
    );
}

export default DropDown;
