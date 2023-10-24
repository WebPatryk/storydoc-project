import "./MainBoard.scss";
import { Board } from "@/components/board";
import { Pen, Trash } from "@/assets/icons";
import { useState } from "react";

export const MainBoard = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleSaveItem = (e) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  return (
    <ul className="board-container">
      <li>
        <Board />
        <>
          {isCreating ? (
            <div className="board-create-wrapper">
              <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="board-input-container"
              >
                <input
                  type="text"
                  placeholder="Title of the new list"
                  onKeyDown={handleSaveItem}
                  className="board-create-card-input"
                />
                {isHovering && (
                  <div className="workspace-edit">
                    <button className="workspace-button">
                      <Pen />
                    </button>
                    <button
                      className="workspace-button"
                      onClick={() => setIsCreating(false)}
                    >
                      <Trash />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button
              className="button-add button-add-right-corner"
              onClick={() => setIsCreating(true)}
            >
              + Add another list
            </button>
          )}
        </>
      </li>
    </ul>
  );
};
