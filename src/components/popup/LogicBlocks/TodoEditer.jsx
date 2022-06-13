import React from "react";
import { useState } from "react";

import PopupBase from "../Base/PopupBase";
import "./PopUpLogic.css";

function ToDoMaker(props) {
  const [todoToEdit, setTodoToEdit] = useState(props.todoToEdit);

  function handleDelete() {
    props.deleteThisToDo();
  }

  function handleTodoEdit() {
    if (!todoToEdit.title) return;
    props.todoEditer(todoToEdit);
    props.setIsActiveModal(false);
  }

  return (
    <PopupBase
      isActiveModal={props.isActiveModal}
      setIsActiveModal={props.setIsActiveModal}
    >
      <input
        className="titleInput"
        type="text"
        placeholder="Title here"
        value={todoToEdit.title}
        onChange={(e) => {
          setTodoToEdit({ ...todoToEdit, title: e.target.value });
        }}
      />
      <textarea
        className="bodyArea"
        placeholder="Body here"
        value={todoToEdit.body}
        onChange={(e) => {
          setTodoToEdit({ ...todoToEdit, body: e.target.value });
        }}
      />
      <div className="buttonArea">
        <button className="deleteButton" onClick={handleDelete} />
        <button className="applyButton" onClick={handleTodoEdit} />
      </div>
    </PopupBase>
  );
}

export default ToDoMaker;
