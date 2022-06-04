import React from "react";

function ToDoBlock(props) {
  return (
    <div>
      <h1>
        {props.id}. {props.title}
      </h1>
      <div>Completed: {props.completed ? "completed" : "don't completed"}</div>
    </div>
  );
}

export default ToDoBlock;
