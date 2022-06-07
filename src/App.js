import React, { useEffect, useMemo, useState } from "react";
import TopPanel from "./components/Top/TopPanel";
import "./App.css";
import ShowToDo from "./components/ShowToDo";
import { setToDo } from "./Api/ToDoGetApi";

function App() {
  const [toDoList, setToDoList] = useState([]);
  //const [sortedToDoList, setSortedToDoList] = useState([]);

  useEffect(() => {
    setToDo(setToDoList);
  }, []);

  const completeChanger = (id) => {
    var list = [...toDoList];
    var toDoToChange = list.find((el) => el.id === id);
    toDoToChange.completed = !toDoToChange.completed;
    setToDoList(list);
    console.log(list);
  };

  function getSearchedToDoList(searchQuery) {
    if (searchQuery) {
      return [...toDoList].map((el) =>
        el.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    } else {
      return toDoList;
    }
  }

  return (
    <div className="App">
      <TopPanel />
      <ShowToDo toDoList={toDoList} completeChanger={completeChanger} />
    </div>
  );
}

export default App;
