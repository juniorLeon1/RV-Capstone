import React from "react";
import "../../styles/SavedList.css";

const SavedList = () => {
  return (
    <div className="saved-list-body">
      <div className="saved-list-title">
        <h1>Your saved Lists!</h1>

        <div className="buttons">
          <select name="sort">
            <option value="updated">Recently Updated</option>
            <option value="alphabetical">Alphabetical order</option>
            <option value="date">Created Date</option>
          </select>
          <button>
            Create List <i class="fa-solid fa-plus"></i>
          </button>
          <button>Remove list</button>
        </div>
      </div>

      <div className="list-card">
        <div className="all-list-box">
          <img
            className="all-img"
            src={require("../../images/list.png")}
            alt="all list icon"
          />
        </div>
        <h3>All saved items</h3>
      </div>
    </div>
  );
};

export default SavedList;
