import { Pen, Trash } from "@/assets/icons";
import "./BoardContent.scss";
import { useState } from "react";
import { addTask, deleteTask } from "@/store/slices";
import { useDispatch } from "react-redux";

export const BoardContent = ({ id, text, index, length, groupIndex }) => {
  const dispatch = useDispatch();

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [boardValue, setBoardValue] = useState("");

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleSaveNewWorkspace = (e) => {
    console.log(index);
    if (e.key === "Enter") {
      e.preventDefault();
      if (boardValue === "") return;
      dispatch(
        addTask({
          index: groupIndex,
          data: { text: boardValue, isEdited: false },
        })
      );

      setIsCreating(false);
      setBoardValue("");
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask({ id, index: groupIndex }));
  };

  return (
    <>
      <li
        className="workspace-item"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p className="workspace-text">{text}</p>
        {isHovering && (
          <div className="workspace-edit">
            <button className="workspace-button">
              <Pen />
            </button>
            <button
              className="workspace-button"
              onClick={() => handleDeleteTask(id)}
            >
              <Trash />
            </button>
          </div>
        )}
      </li>
      {index === length - 1 &&
        (isCreating ? (
          <>
            <div className="workspace-logo">
              <input
                type="text"
                placeholder="Title of the new card"
                className="workspace-create-input"
                value={boardValue}
                onChange={(e) => setBoardValue(e.target.value)}
                onKeyDown={(e) => handleSaveNewWorkspace(e)}
              />
            </div>
          </>
        ) : (
          <button
            className="button-add"
            onClick={() => {
              setIsCreating(true);
            }}
          >
            + Add a card
          </button>
        ))}
    </>
  );
};
