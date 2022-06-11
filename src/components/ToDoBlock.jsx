import React, { useState } from "react";
import "./componentStyles/todoStyle.css";
import ToDoMaker from "./popup/ToDoMaker";

function ToDoBlock(props) {
  const [isBootomActive, setIsBootomActive] = useState(false);

  const [isActiveModal, setIsActiveModal] = useState(false);

  function deleteHandler() {
    props.todoDeleter(props.id);
  }

  return (
    <>
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
                className={`defaultButton ${
                  isBootomActive ? "openedButton" : ""
                }`}
                onClick={() => setIsBootomActive(!isBootomActive)}
              />
            </div>
          </div>
        </div>
        {isBootomActive && (
          <div className="botoomPart">
            {props.body && <div className="botoomBar">{props.body}</div>}
            <div className="bottomButtonBlock">
              <button className=" whiteDeleteButton" onClick={deleteHandler} />
              <button
                className=" editButton"
                onClick={() => setIsActiveModal(true)}
              />
            </div>
          </div>
        )}
      </div>
      <ToDoMaker
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      ></ToDoMaker>
    </>
  );
}
// onInput Change completed
// onButton change width
// вынести туду блок в отдельный компонент

export default ToDoBlock;
