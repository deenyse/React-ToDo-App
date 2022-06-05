import React from "react";

import ToDoBlock from "./ToDoBlock";

function ShowToDo(props) {
  return (
    <div>
      {props.toDoList.map((elem) => (
        <ToDoBlock key={elem.id} {...elem} />
      ))}
    </div>
  );
}

export default ShowToDo;
