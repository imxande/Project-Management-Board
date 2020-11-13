import React from "react";
import "./Board.css";

const Board = () => {
  return (
    <div className="board">
      <div className="board-headers">
        <p>To Do</p>
      </div>
      <div className="board-headers">
        <p>In Progress</p>
      </div>
      <div className="board-headers">
        <p>Review</p>
      </div>
      <div className="board-headers">
        <p>Done</p>
      </div>
    </div>
  );
};

export default Board;
