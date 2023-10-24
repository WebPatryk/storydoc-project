import "./WorkspaceHeader.scss";
import "@/utils/styles/ReusableStyles.scss";
import { Logo, Pen, Plus, Trash } from "@/assets/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "@/store/slices";
<<<<<<< HEAD
import { SingleWorkspace } from "@/components/singleWorkspace";
=======
import { SingleWorkspace } from "@/components/SingleWorkspace";
>>>>>>> a5912d1039b90c379c5cc3e37110d687d0b7087d

export const WorkspaceHeader = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [boardValue, setBoardValue] = useState("");
  const [workspaces, setWorkspaces] = useState([
    { logo: <Logo />, title: "Acme Corp workspace" },
  ]);
  const boards = useSelector((state) => state.board.lists);

  const dispatch = useDispatch();

<<<<<<< HEAD
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

=======
  const handleSaveNewWorkspace = (e) => {
    e.preventDefault();
    dispatch(
      addBoard({ id: crypto.randomUUID(), logo: "", title: boardValue })
    );
>>>>>>> a5912d1039b90c379c5cc3e37110d687d0b7087d
    setIsCreating(false);
    setBoardValue("");
  };
  const componentMap = {
    Logo,
  };

  return (
    <div className="workspace-container">
      {boards.map((workspace) => (
<<<<<<< HEAD
        <SingleWorkspace key={workspace.id} {...workspace} />
=======
        <SingleWorkspace {...workspace} />
>>>>>>> a5912d1039b90c379c5cc3e37110d687d0b7087d
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
