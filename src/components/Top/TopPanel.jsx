import React, { useEffect, useState } from "react";
import "./Top.css";

function TopPanel(props) {
  const topRef = React.createRef();

  const [isSearch, setIsSearch] = useState(false);
  const [searchQuery, setSearchQuery] = props.searchParams;
  const searchBlockRef = React.createRef();

  const [isFilter, setIsFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = props.selectParams;
  const flterBlockRef = React.createRef();

  useEffect(() => {
    if (isSearch) {
      setIsFilter(false);
      searchBlockRef.current.classList.add("openedBtnSearch");
    } else {
      searchBlockRef.current.classList.remove("openedBtnSearch");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearch]);

  useEffect(() => {
    if (isFilter) {
      setIsSearch(false);
      flterBlockRef.current.classList.add("openedBtnFilter");
    } else {
      flterBlockRef.current.classList.remove("openedBtnFilter");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilter]);

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
          <div className="filtterBlock " ref={flterBlockRef}>
            <button
              className="btnFilter"
              onClick={() => setIsFilter(!isFilter)}
            />
            {isFilter && (
              <select
                className="filterSelect"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option>By Date</option>
                <option>By Name</option>
                <option>Completed</option>
                <option>NotCompleted</option>
              </select>
            )}
          </div>
          <div className="searchBlock " ref={searchBlockRef}>
            <button
              className="btnSearch"
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
