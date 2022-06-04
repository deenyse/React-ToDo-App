import React from "react";
import "./componentStyles/app.css";
function ToDoBlock(props) {
  return (
    <div
      className={`block ${
        props.completed ? "completedTodo" : "notCompletedTodo"
      }`}
    >
      <p>{props.title}</p>
      <div>Completed: {props.completed ? "completed" : "don't completed"}</div>
    </div>
  );
}

export default ToDoBlock;
