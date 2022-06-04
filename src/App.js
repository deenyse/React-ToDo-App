import React from "react";
import ShowToDo from "./components/ShowToDo";
import "./style.css";
function App() {
  return (
    <div className="App">
      <h1 className="header">ToDo</h1>
      <ShowToDo />
    </div>
  );
}

export default App;
