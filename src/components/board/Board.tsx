import "./Board.scss";
import "@/utils/styles/ReusableStyles.scss";
import { BoardContent } from "@/components/boardContent";
import { useState } from "react";
import { Pen, Trash } from "@/assets/icons";
import { useSelector } from "react-redux";

export const Board = () => {
  const workspaces = useSelector((state) => state.workspaces.workspaces);

  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="workspace">
      {workspaces.map((workspace, workspaceIndex) => (
        <div key={workspace.id} className="workspace-task-title-container">
          <div
            className="workspace-edit-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <h3 className="workspace-task-title">{workspace.title}</h3>
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
          <ul className="workspace-wrapper">
            {workspace.elements.map((element, index) => (
              <BoardContent
                key={index}
                {...element}
                length={workspace.elements.length}
                index={index}
                groupIndex={workspaceIndex}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
