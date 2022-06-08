import React, { useEffect, useMemo, useState } from "react";
import TopPanel from "./components/Top/TopPanel";
import "./App.css";
import ShowToDo from "./components/ShowToDo";
import { setToDo } from "./Api/ToDoGetApi";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  //const [sortedToDoList, setSortedToDoList] = useState([]);

  useEffect(() => {
    setToDo(setToDoList);
  }, []);

  const completeChanger = (id) => {
    var list = [...toDoList];
    var toDoToChange = list.find((el) => el.id === id);
    toDoToChange.completed = !toDoToChange.completed;
    setToDoList(list);
  };

  const searchedToDoList = useMemo(() => {
    if (searchQuery) {
      return [...toDoList].filter((el) =>
        el.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    } else {
      return [...toDoList];
    }
  }, [toDoList, searchQuery]);

  return (
    <div className="App">
      <TopPanel
        searchParams={[searchQuery, setSearchQuery]}
        selectParams={[selectedFilter, setSelectedFilter]}
      />
      <ShowToDo toDoList={searchedToDoList} completeChanger={completeChanger} />
    </div>
  );
}

export default App;
