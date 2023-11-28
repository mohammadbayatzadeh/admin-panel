//comps
import AsideItem from "./AsideItem";

//icons
import { VscHome, VscMap, VscAccount, VscPackage } from "react-icons/vsc";

function NavSec() {
  return (
    <div className="mb-7 ml-4 text-text-color-primary">
      <p className="text-xl font-semibold mb-2.5">Main </p>
      <ul className="list-none">
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
