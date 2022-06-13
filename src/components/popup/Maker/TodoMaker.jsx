import React from "react";
import { useState } from "react";

import PopupBase from "../Base/PopupBase";
import "./maker.css";

function ToDoMaker(props) {
  const [addTitle, setAddTitle] = useState("");
  const [addBody, setAddBody] = useState("");

  // function handleTodoAdd() {
  //   // TODO: add no title LOGIC
  //   if (!addTitle) return;
  //   props.setIsActiveModal(false);
  //   setAddTitle("");
  //   setAddBody("");
  //   props.todoAdder({
  //     title: addTitle,
  //     body: addBody,
  //   });
  // }

  function handleDelete() {
    props.setIsActiveModal(false);
    setAddBody("");
    setAddTitle("");
  }

  function handleTodoAdd() {
    if (!addTitle) return;
    console.log("add");
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
/*
  const [addTitle, setAddTitle] = useState("");
  const [addBody, setAddBody] = useState("");

  function handleTodoAdd() {
    // TODO: add no title LOGIC
    if (!addTitle) return;
    props.setIsActiveModal(false);
    setAddTitle("");
    setAddBody("");
    props.todoAdder({
      title: addTitle,
      body: addBody,
    });
  }

  function handleDelete() {
    props.setIsActiveModal(false);
    setAddBody("");
    setAddTitle("");
  }
*/

/*
 <div
      className={props.isActiveModal ? "modal modal_active" : "modal"}
      onClick={() => props.setIsActiveModal(false)}
    >
      <div
        className={
          props.isActiveModal
            ? "modal__content modal__content_active"
            : "modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          placeholder="Title here"
          value={addTitle}
          onChange={(e) => {
            setAddTitle(e.target.value);
          }}
        />
        <textarea
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
      </div>
    </div>
*/
