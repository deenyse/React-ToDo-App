import React, { useEffect, useState } from "react";
import { setToDo } from "../Api/ToDoGetApi";
import ToDoBlock from "./ToDoBlock";

function ShowToDo() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    setToDo(setToDoList);
  }, []);

  return (
    <div>
      {toDoList.map((elem) => (
        <ToDoBlock key={elem.id} {...elem} />
      ))}
    </div>
  );
}

export default ShowToDo;
