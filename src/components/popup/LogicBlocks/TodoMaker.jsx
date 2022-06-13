import React from "react";
import { useState } from "react";

import PopupBase from "../Base/PopupBase";
import "./PopUpLogic.css";

function ToDoMaker(props) {
  const [addTitle, setAddTitle] = useState("");
  const [addBody, setAddBody] = useState("");

  function handleDelete() {
    props.setIsActiveModal(false);
    setAddBody("");
    setAddTitle("");
  }

  function handleTodoAdd() {
    if (!addTitle) return;
    props.setIsActiveModal(false);
    setAddTitle("");
    setAddBody("");
    props.todoAdder({
      title: addTitle,
      body: addBody,
    });
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
        value={addTitle}
        onChange={(e) => {
          setAddTitle(e.target.value);
        }}
      />
      <textarea
        className="bodyArea"
        placeholder="Body here"
        value={addBody}
        onChange={(e) => {
          setAddBody(e.target.value);
        }}
      />
      <div className="buttonArea">
        <button className="deleteButton" onClick={handleDelete} />
        <button className="applyButton" onClick={handleTodoAdd} />
      </div>
    </PopupBase>
  );
}

export default ToDoMaker;
