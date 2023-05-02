import React, { useState } from "react";
import "../../styles/SavedList.css";

const SavedList = () => {
  const [editToggle, setEditToggle] = useState(false);

  return (
    <div className="saved-list-body">
      <div className="saved-list-title">
        <h1>Your saved Lists!</h1>

        <div className="buttons">
          <select name="sort" className="sort-drpdwn">
            <option value="updated">Recently Updated</option>
            <option value="alphabetical">Alphabetical order</option>
            <option value="date">Created Date</option>
          </select>
          <button className="create-list-button">
            Create List <i class="fa-solid fa-plus"></i>
          </button>
          <button className="remove-list-button">
            Remove list <i class="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>

      <div className="list-boxes">
        <div className="list-card">
          <div className="all-list-box">
            <img
              className="all-img"
              src={require("../../images/list.png")}
              alt="all list icon"
            />
          </div>
          <h3 className="all-title">All saved locations</h3>
        </div>

        <div className="list-card">
          <div className="example-box"></div>
          <h3
            className="list-title"
            onMouseEnter={() => setEditToggle(true)}
            onMouseLeave={() => setEditToggle(false)}
          >
            Brazil Trip (example list){" "}
            <i
              className={`fa-regular fa-pen-to-square edit ${
                editToggle === true ? "active" : "inactive"
              }`}
            ></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SavedList;
