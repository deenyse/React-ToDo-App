import React from "react";
import "./popupBase.css";

function PopupBase(props) {
  return (
    <div
      className={`modal ${props.isActiveModal ? "modal_active" : ""}`}
      onClick={() => props.setIsActiveModal(false)}
    >
      <div
        className={`modal__content ${
          props.isActiveModal ? "modal__content_active" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default PopupBase;
