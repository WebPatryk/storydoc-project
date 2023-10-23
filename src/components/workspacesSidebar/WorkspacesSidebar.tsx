import "./WorkspacesSidebar.scss";
import { UserProfile } from "../userProfile";
import { WorkspaceSettings } from "../workspaceSettings";
import { WorkspaceHeader } from "../workspaceHeader";
import { WorkspaceList } from "@/components/workspace-lists";

export const WorkspacesSidebar = () => {
  return (
    <div className="workspaces">
      <div className="workspaces-header">
        <WorkspaceHeader />
      </div>
      <div className="workspaces-main">
        <WorkspaceList />
      </div>
      <div className="workspaces-footer">
        <UserProfile />
        <WorkspaceSettings />
      </div>
    </div>
  );
};
