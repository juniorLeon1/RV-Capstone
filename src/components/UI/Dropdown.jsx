import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Dropdown.css";

const Dropdown = (props) => {
  return (
    <div className={`drpdwn-menu-wrap ${props.toggled? 'active' : 'inactive' }`}>
      <ul className="drpdwn-menu">
        {props.menu.map((element) => {
          return (
            <Link to={element.url} key={element.item}>
              <li key={element.item} className="drpdwn-item">{element.item}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
