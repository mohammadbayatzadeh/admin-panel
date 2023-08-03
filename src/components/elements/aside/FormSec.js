//styles
import styles from "./Sec.module.css";

//comps
import AsideItem from "./AsideItem";

//icons
import {
  VscOutput,
  VscPinned,
  VscSymbolKeyword,
  VscPass,
} from "react-icons/vsc";

function FormSec() {
  return (
    <div className={styles.section}>
      <p>Forms</p>
      <ul>
        <AsideItem title="Form Components" icon={<VscOutput />} />
        <AsideItem title="Form Picker" icon={<VscPinned />} />
        <AsideItem title="Form Making" icon={<VscSymbolKeyword />} />
        <AsideItem
          title="Ready to use"
          icon={<VscPass />}
          list={["Currency Form", "Booking Form", "Login Form"]}
        />
      </ul>
    </div>
  );
}

export default FormSec;
