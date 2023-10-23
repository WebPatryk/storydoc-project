import "./App.scss";
import { WorkspacesSidebar } from "./components/workspacesSidebar";
import { MainBoard } from "@/components/mainBoard";

export const App = () => {
  return (
    <div className="container">
      <WorkspacesSidebar />
      <MainBoard />
    </div>
  );
};
