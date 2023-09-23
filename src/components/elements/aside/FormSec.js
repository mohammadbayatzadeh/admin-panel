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
    <div className="mb-7 ml-4 text-text-color-primary">
      <p className="text-xl font-semibold mb-2.5">Forms</p>
      <ul className="list-none">
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
