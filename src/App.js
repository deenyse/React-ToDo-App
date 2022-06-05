import React from "react";
import ManagerToDo from "./components/ManagerToDo";
import TopPanel from "./components/Top/TopPanel";
import "./App.css";
function App() {
  return (
    <div className="App">
      <TopPanel />
      <ManagerToDo />
    </div>
  );
}

export default App;
