import React, { useEffect, useState } from "react";
import ShowToDo from "./ShowToDo";
import { setToDo } from "../Api/ToDoGetApi";
function ManagerToDo() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    setToDo(setToDoList);
  }, []);

  // create todoComplete changer hook
  return <ShowToDo toDoList={toDoList} />;
}

export default ManagerToDo;
