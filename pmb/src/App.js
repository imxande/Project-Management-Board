import "./App.css";
import Board from "./components/Board";
import { useState } from "react";
import data from "./assets/data.json";

function App() {
  const [jsonData, setJsonData] = useState(data);

  return (
    <div className="App">
      <h1>Project Management Board</h1>
      <Board jsonData={jsonData} />
    </div>
  );
}

export default App;
