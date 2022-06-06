import React, { useEffect, useState } from "react";
import ShowToDo from "./ShowToDo";
import { setToDo } from "../Api/ToDoGetApi";
function ManagerToDo() {
  const [toDoList, setToDoList] = useState([]);

  const completeChanger = (id) => {
    var changingToDo = toDoList.find((el) => el.id === id);
    changingToDo.completed = !changingToDo.completed;
    setToDoList(toDoList);
  };

  useEffect(() => {
    setToDo(setToDoList);
  }, []);

  // create todoComplete changer hook
  return <ShowToDo toDoList={toDoList} completeChanger={completeChanger} />;
}

export default ManagerToDo;
