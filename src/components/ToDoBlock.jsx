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
      <input className="checker" type="checkbox" />
      <button
        className="defaultButton closedButton"
        onClick={bottomActiveChangeHandler}
      ></button>

      <label>{props.title}</label>
      {isBootomActive && <div className="botoomBar">{props.body}</div>}
    </div>
  );
}
// onInput Change completed
// onButton change width
// вынести туду блок в отдельный компонент

export default ToDoBlock;
