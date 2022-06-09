import React, { useState } from "react";
import "./componentStyles/todoStyle.css";
function ToDoBlock(props) {
  const [isBootomActive, setIsBootomActive] = useState(false);

  function bottomActiveChangeHandler(event) {
    setIsBootomActive(!isBootomActive);
    if (isBootomActive) {
      event.target.classList.remove("openedButton");
    } else {
      event.target.classList.add("openedButton");
    }
  }

  function deleteHandler() {
    props.todoDeleter(props.id);
  }

  return (
    <div className={`block`}>
      <div className="mainPart">
        <span className="completedPart">
          <input
            defaultChecked={props.completed}
            className="checker"
            type="checkbox"
            onChange={() => props.completeChanger(props.id)}
          />
        </span>
        <div className="titlePart">
          <h4 className="title">{props.title}</h4>
        </div>
        <div className="buttonPart">
          <div className="rotatingButton">
            <button
              className="defaultButton "
              onClick={bottomActiveChangeHandler}
            />
          </div>
        </div>
      </div>
      {isBootomActive && (
        <div className="botoomPart">
          <div className="bottomButtonBlock">
            <button onClick={deleteHandler}>Delete</button>
            <button>Edit</button>
          </div>
          {props.body && <div className="botoomBar">{props.body}</div>}
        </div>
      )}
    </div>
  );
}
// onInput Change completed
// onButton change width
// вынести туду блок в отдельный компонент

export default ToDoBlock;
