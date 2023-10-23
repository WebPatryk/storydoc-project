import "./WorkspaceHeader.scss";
import "@/utils/styles/ReusableStyles.scss";
import { Logo, Pen, Plus, Trash } from "@/assets/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "@/store/slices";

export const WorkspaceHeader = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState(false);
  const [workspaces, setWorkspaces] = useState([
    { logo: <Logo />, title: "Acme Corp workspace" },
  ]);
  const boards = useSelector((state) => state.board.lists);

  const dispatch = useDispatch();

  console.log(boards);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleSaveNewWorkspace = (e) => {
    // setWorkspaces([...workspaces, { logo: <Logo />, title: "ee" }]);
    dispatch(addBoard({ logo: "", title: "New title" }));
    console.log("enter press here! ");
    setIsCreating(false);
  };
  const componentMap = {
    Logo, // Map "Logo" string to the Logo component
    // Add other mappings for different components as needed
  };

  return (
    <div className="workspace-container">
      {boards.map((workspace) => (
        <div
          className="workspace-logo"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {workspace.logo === "Logo" && <Logo />}
          <span>{workspace.title}</span>
          {isHovering && (
            <div className="workspace-edit">
              <button className="workspace-button">
                <Pen />
              </button>
              <button className="workspace-button">
                <Trash />
              </button>
            </div>
          )}
        </div>
      ))}
      {isCreating ? (
        <>
          <div className="workspace-logo">
            <Logo />
            <input
              type="text"
              placeholder="Title of the new card"
              className="workspace-create-input"
            />
          </div>
          <button className="workspace-add" onClick={handleSaveNewWorkspace}>
            <span>✓ Save new workspace</span>
          </button>
        </>
      ) : (
        <button className="workspace-add" onClick={() => setIsCreating(true)}>
          <Plus />
          <span>Create workspace</span>
        </button>
      )}
    </div>
  );
};
