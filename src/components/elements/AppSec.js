import styles from "./Sec.module.css";
import AsideItem from "./AsideItem";
import {
  VscMention,
  VscTerminalUbuntu,
  VscTag,
  VscPass,
  VscBriefcase,
  VscSymbolColor,
  VscEditorLayout,
} from "react-icons/vsc";

function AppSec() {
  return (
    <div className={styles.section}>
      <p>App</p>
      <ul>
        <AsideItem title="Chat" icon={<VscMention />} />
        <AsideItem
          title="Social"
          list={["Wall", "Messages"]}
          icon={<VscTerminalUbuntu />}
        />
        <AsideItem
          title="Task"
          icon={<VscTag />}
          list={["Task List", "Task Board", "Task Details"]}
        />
        <AsideItem
          title="Widget"
          icon={<VscEditorLayout />}
          list={["Static", "Data", "Chart Widget"]}
        />
        <AsideItem title="To-Do" icon={<VscPass />} list={["To-Do", "Notes"]} />
        <AsideItem
          title="Gallery"
          icon={<VscSymbolColor />}
          list={["Gallery Grid", "Advance Gallery"]}
        />
        <AsideItem
          title="Job Search"
          icon={<VscBriefcase />}
          list={["job Panel", "Job Find"]}
        />
      </ul>
    </div>
  );
}

export default AppSec;
