import React, { useEffect, useState } from "react";
import ToDoMaker from "../popup/ToDoMaker";
import "./Top.css";

function TopPanel(props) {
  const topRef = React.createRef();

  const [isActiveModal, setIsActiveModal] = useState(false);

  const [isSearch, setIsSearch] = useState(false);
  const [searchQuery, setSearchQuery] = props.searchParams;

  const [isFilter, setIsFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = props.selectParams;

  const [addTitle, setAddTitle] = useState("");
  const [addBody, setAddBody] = useState("");

  function handleTodoAdd() {
    if (!addTitle) return;
    setIsActiveModal(false);
    setAddBody("");
    setAddTitle("");
    props.todoAdder({
      title: addTitle,
      body: addBody,
    });
  }

  useEffect(() => {
    if (isSearch) {
      setIsFilter(false);
    }
  }, [isSearch]);

  useEffect(() => {
    if (isFilter) {
      setIsSearch(false);
    }
  }, [isFilter]);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 35) {
        topRef.current.classList.add("headerWide");
      } else {
        topRef.current.classList.remove("headerWide");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div ref={topRef} className="defaultTop header">
        <div className="inToDo">
          <h1>ToDo</h1>
          <div className="controlsBlock">
            <div>
              <button
                className="btnAdd"
                onClick={() => setIsActiveModal(true)}
              />
            </div>
            <div
              className={
                isFilter ? "filtterBlock openedBtnFilter" : "filterBlock"
              }
            >
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
                  <option>Newer</option>
                  <option>Older</option>
                  <option>By Name</option>
                  <option>Completed</option>
                  <option>NotCompleted</option>
                </select>
              )}
            </div>
            <div
              className={
                isSearch ? "searchBlock openedBtnSearch" : "searchBlock"
              }
            >
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

      <ToDoMaker
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      >
        <input
          type="text"
          placeholder="Title here"
          value={addTitle}
          onChange={(e) => {
            setAddTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Body here"
          value={addBody}
          onChange={(e) => {
            setAddBody(e.target.value);
          }}
        />
        <button
          className="deleteButton"
          onClick={() => {
            setIsActiveModal(false);
            setAddBody("");
            setAddTitle("");
          }}
        />
        <button className="applyButton" onClick={() => handleTodoAdd()} />
      </ToDoMaker>
    </>
  );
}

export default TopPanel;
