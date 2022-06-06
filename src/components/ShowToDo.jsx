import React from "react";
import ToDoBlock from "./ToDoBlock";
import "./componentStyles/todoStyle.css";

function ShowToDo(props) {
  return (
    <div className={"toDoZone"}>
      {props.toDoList.map((elem) => (
        <ToDoBlock
          key={elem.id}
          {...elem}
          completeChanger={props.completeChanger}
        />
      ))}
    </div>
  );
}

export default ShowToDo;
