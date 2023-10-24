import { useState } from "react";
import { Logo, Pen, Trash } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { updateBoard, deleteBoard } from "@/store/slices";

interface Props {
  id: string;
  logo: string;
  title: string;
}

export const SingleWorkspace = ({ id, logo, title }: Props) => {
  const dispatch = useDispatch();

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [boardName, setBoardName] = useState<string>("");

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleDeleteBoard = (id: string) => {
    dispatch(deleteBoard(id));
  };
  const handleUpdateBoard = (event, id) => {
    if (event.key === "Enter") {
      dispatch(updateBoard({ id, newValue: event.target.value }));
      setIsEditing(false);
    }
  };

  return (
      <div
          className="workspace-logo"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
      >
        {logo === "Logo" && <Logo />}
        {isEditing ? (
            <input
                type="text"
                className="workspace-edit-input"
                value={boardName}
                onKeyDown={(e) => handleUpdateBoard(e, id)}
                onChange={(e) => setBoardName(e.target.value)}
            />
        ) : (
            <span>{title}</span>
        )}

        {isHovering && (
            <div className="workspace-edit">
              <button
                  className="workspace-button"
                  onClick={() => {
                    setIsEditing(true);
                    setBoardName(title);
                  }}
              >
                <Pen />
              </button>
              <button
                  className="workspace-button"
                  onClick={() => handleDeleteBoard(id)}
              >
                <Trash />
              </button>
            </div>
        )}
      </div>
  );
};
