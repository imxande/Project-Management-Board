import React from "react";
import "./Board.css";
import BoardCard from "./BoardCard";

const Board = ({ jsonData }) => {
  console.log(jsonData);

  const lanes = [
    { id: 1, title: "TO DO" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
  ];

  return (
    <div>
      {lanes.map((lane) => (
        <div key={lane.id} className="board">
          <div className="board-headers">
            <header>{lane.title}</header>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
