import React, { useState } from "react";

import TodoEditer from "./popup/LogicBlocks/TodoEditer";
import "./componentStyles/todoStyle.css";

function ToDoBlock(props) {
  const [isBootomActive, setIsBootomActive] = useState(false);

  const [isActiveModal, setIsActiveModal] = useState(false);

  function deleteHandler() {
    props.todoDeleter(props.params.id);
  }

  return (
    <>
      <div className={`block`}>
        <div className="mainPart">
          <span className="completedPart">
            <input
              defaultChecked={props.params.completed}
              className="checker"
              type="checkbox"
              onChange={() => props.completeChanger(props.params.id)}
            />
          </span>
          <div className="titlePart">
            <h4 className="title">{props.params.title}</h4>
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
            {props.params.body && (
              <div className="botoomBar">{props.params.body}</div>
            )}
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
      <TodoEditer
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
        todoToEdit={props.params}
        deleteThisToDo={deleteHandler}
        todoEditer={props.todoEditer}
      />
    </>
  );
}
// onInput Change completed
// onButton change width
// вынести туду блок в отдельный компонент

export default ToDoBlock;
