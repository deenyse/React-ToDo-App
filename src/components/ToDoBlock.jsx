import React, { useState } from "react";
import "./componentStyles/todoStyle.css";
function ToDoBlock(props) {
  const [isBootomActive, setIsBootomActive] = useState(false);

  const bottomActiveChangeHandler = (event) => {
    setIsBootomActive(!isBootomActive);
    if (Array.from(event.target.classList).includes("openedButton")) {
      event.target.classList.remove("openedButton");
      event.target.classList.add("closedButton");
    } else {
      event.target.classList.remove("closedButton");
      event.target.classList.add("openedButton");
    }
  };

  return (
    <div className={`block`}>
      <div className="mainPart">
        <span className="completedPart">
          <input
            checked={props.completed}
            className="checker"
            type="checkbox"
            readOnly // заглушка что бы не было ошибки, но блок не работатет
          />
        </span>
        <div className="titlePart">
          <h4 className="title">{props.title}</h4>
        </div>
        <div className="buttonPart">
          <div className="rotatingButton">
            <button
              className="defaultButton closedButton"
              onClick={bottomActiveChangeHandler}
            />
          </div>
        </div>
      </div>
      {isBootomActive && <div className="botoomBar">{props.body}</div>}
    </div>
  );
}
// onInput Change completed
// onButton change width
// вынести туду блок в отдельный компонент

export default ToDoBlock;
