import "./WorkspaceList.scss";
import { Board, Home, Magnifier, Profile } from "@/assets/icons";

export const WorkspaceList = () => {
  return (
    <ul className="workspace-list">
      {/*workspace-active*/}
      <li>
        <Home />
        <span>Dashboard</span>
      </li>
      <li>
        <Board />
        <span>Boards</span>
      </li>
      <li>
        <Profile />
        <span>Profile</span>
      </li>
      <li>
        <Magnifier />
        <span>Search</span>
      </li>
    </ul>
  );
};
