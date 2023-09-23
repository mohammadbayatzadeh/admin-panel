//comps
import AsideItem from "./AsideItem";

//icons
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
    <div className="mb-7 ml-4 text-text-color-primary">
      <p className="text-xl font-semibold mb-2.5">App</p>
      <ul className="list-none">
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
