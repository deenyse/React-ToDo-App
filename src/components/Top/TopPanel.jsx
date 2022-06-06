import React, { useEffect, useState } from "react";
import "./Top.css";

function TopPanel() {
  const topRef = React.createRef();

  const [isSearch, setIsSearch] = useState(true);
  const handeleSearchOpen = (event) => {
    var classes = event.target.classList;
    if (Array.from(classes).includes("openedBtnSearch")) {
      classes.remove("openedBtnSearch");
      setIsSearch(false);
    } else {
      classes.add("openedBtnSearch");
      setIsSearch(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 35) {
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
        <div className="controlsBlock">
          <div>
            <button className="btnAdd" />
          </div>
          <div>
            <button className="btnFilter" />
          </div>
          <div className="searchBlock ">
            <button className="btnSearch" onClick={handeleSearchOpen} />
            {isSearch && (
              <input
                type="text"
                className="searchInput"
                placeholder={"Search"}
              />
            )}
          </div>
          <div>
            <button className="btnAuth" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPanel;
