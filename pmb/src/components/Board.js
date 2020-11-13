import React from "react";
import "./Board.css";

const Board = ({ jsonData }) => {
  console.log("Props:", jsonData);

  const lanes = [
    { id: 1, title: "TO DO" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
  ];

  const filteredLane = (data, id) => {
    if (data.id === id) {
      console.log("Filtered:", data, id);
    }
  };

  return (
    <div>
      {lanes.map((lane) => (
        <div key={lane.id} className="board">
          <div className="board-headers">
            <header>{lane.title}</header>
            <p> {filteredLane(jsonData, lane.id)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
