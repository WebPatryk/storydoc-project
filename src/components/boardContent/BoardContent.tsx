import { Pen, Trash } from "@/assets/icons";
import "./BoardContent.scss";
import { useState } from "react";

export const BoardContent = ({ text, isEdited }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleSaveItem = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  return (
    <li
      className="workspace-item"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isEdited ? (
        <input
          type="text"
          placeholder="Title of the new card"
          onKeyDown={handleSaveItem}
          className="workspace-edit-input"
        />
      ) : (
        <p className="workspace-text">{text}</p>
      )}
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
    </li>
  );
};
