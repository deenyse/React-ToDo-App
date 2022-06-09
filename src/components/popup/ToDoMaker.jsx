import React from "react";
import "./maker.css";

function ToDoMaker(props) {
  return (
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
        {props.children}
      </div>
    </div>
  );
}

export default ToDoMaker;
