import { useState } from "react";
import { Logo, Pen, Trash } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteBoard } from "../../store/slices";

interface Props {
  id: string;
  logo: string;
  title: string;
}

export const SingleWorkspace = ({ id, logo, title }: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const boards = useSelector((state) => state.board.lists);

  const dispatch = useDispatch();

  //   const handleSaveNewWorkspace = (e) => {
  //     e.preventDefault();
  //     dispatch(addBoard({ id: crypto.randomUUID, logo: "", title: boardValue }));
  //     setIsCreating(false);
  //     setBoardValue("");
  //   };

  const handleDeleteBoard = (id: string) => {
    dispatch(deleteBoard(id));
  };
  const handleUpdateBoard = () => {};

  return (
    <div
      className="workspace-logo"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {logo === "Logo" && <Logo />}
      <span>{title}</span>
      {isHovering && (
        <div className="workspace-edit">
          <button className="workspace-button" onClick={handleUpdateBoard}>
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
