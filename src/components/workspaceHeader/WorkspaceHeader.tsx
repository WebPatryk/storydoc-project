import "./WorkspaceHeader.scss";
import "@/utils/styles/ReusableStyles.scss";
import { Logo, Pen, Plus, Trash } from "@/assets/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "@/store/slices";
import { SingleWorkspace } from "@/components/singleWorkspace";

export const WorkspaceHeader = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState(false);
  const [boardValue, setBoardValue] = useState("");
  const [workspaces, setWorkspaces] = useState([
    { logo: <Logo />, title: "Acme Corp workspace" },
  ]);
  const boards = useSelector((state) => state.board.lists);

  const dispatch = useDispatch();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleSaveNewWorkspace = (e) => {
    e.preventDefault();
    if (boardValue === "") return;
    dispatch(
      addBoard({ id: crypto.randomUUID(), logo: "", title: boardValue })
    );

    setIsCreating(false);
    setBoardValue("");

    setIsCreating(false);
  };
  const componentMap = {
    Logo,
  };

  return (
    <div className="workspace-container">
      {boards.map((workspace) => (
        <SingleWorkspace key={workspace.id} {...workspace} />
      ))}
      {isCreating ? (
        <form onSubmit={handleSaveNewWorkspace}>
          <div className="workspace-logo">
            <Logo />
            <input
              type="text"
              placeholder="Title of the new card"
              className="workspace-create-input"
              value={boardValue}
              onChange={(e) => setBoardValue(e.target.value)}
            />
          </div>
          <button className="workspace-add" type="submit">
            <span>✓ Save new workspace</span>
          </button>
        </form>
      ) : (
        <button className="workspace-add" onClick={() => setIsCreating(true)}>
          <Plus />
          <span>Create workspace</span>
        </button>
      )}
    </div>
  );
};
