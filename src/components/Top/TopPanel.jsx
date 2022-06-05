import React, { useEffect } from "react";
import "./Top.css";

function TopPanel() {
  const topRef = React.createRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 30) {
        topRef.current.classList.add("headerWide");
      } else {
        topRef.current.classList.remove("headerWide");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div ref={topRef} className="defaultTop header">
      <div className="inToDo">
        <h1>ToDo</h1>
      </div>
    </div>
  );
}

export default TopPanel;
