import "./Board.scss";
import "@/utils/styles/ReusableStyles.scss";
import { BoardContent } from "@/components/boardContent";
import { useState } from "react";
import { Pen, Trash } from "@/assets/icons";

export const Board = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [tasks, setTasks] = useState([
    { text: "Create a vide for Acme", isEdited: false },
    { text: "Review Acme PDF", isEdited: false },
  ]);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleAddNewCard = () => {
    //add new field
    setTasks([...tasks, { text: "", isEdited: true }]);
  };

  return (
    <div className="workspace">
      <div
        className="workspace-task-title-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <h3 className="workspace-task-title">Working on</h3>
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
        {tasks.map((task) => (
          <BoardContent {...task} />
        ))}
      </ul>
      <button className="button-add" onClick={handleAddNewCard}>
        + Add a card
      </button>
    </div>
  );
};
