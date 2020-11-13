import React from "react";

const BoardCard = () => {
  return (
    <div className="board">
      <div id="1" className="board-headers">
        <header>To Do</header>
      </div>
      <div id="2" className="board-headers">
        <header>In Progress</header>
      </div>
      <div id="3" className="board-headers">
        <header>Review</header>
      </div>
      <div id="4" className="board-headers">
        <header>Done</header>
      </div>
    </div>
  );
};

export default BoardCard;
