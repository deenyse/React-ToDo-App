import React, { useEffect, useState } from "react";
import "./Top.css";

function TopPanel(props) {
  const topRef = React.createRef();

  const [isSearch, setIsSearch] = useState(false);
  const [searchQuery, setSearchQuery] = props.searchParams;
  const searchBlockRef = React.createRef();

  //const [isFilter, setIsFilter] = useState(false);
  //const [selectedFilter, setSelectedFilter] = props.selectParams;
  //const flterBlockRef = React.createRef();

  useEffect(() => {
    if (isSearch) {
      searchBlockRef.current.classList.add("openedBtnSearch");
    } else {
      searchBlockRef.current.classList.remove("openedBtnSearch");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearch]);

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
          <div className="filtterBlock ">
            <button className="btnFilter" />
          </div>
          <div className="searchBlock ">
            <button
              className="btnSearch"
              ref={searchBlockRef}
              onClick={() => setIsSearch(!isSearch)}
            />
            {isSearch && (
              <input
                type="text"
                className="searchInput"
                placeholder={"Search"}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
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
