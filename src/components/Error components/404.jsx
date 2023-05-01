import React from "react";
import { Link } from "react-router-dom";
import AvoGuy from "../../images/404.gif";

export default function LostPage() {
  return (
    <div>
      <img
        className="avoguy"
        alt="sad avocado lost through the desert"
        src={AvoGuy}
      />
      <br />
      <Link className="Plan-button" to="/">
        Home
      </Link>
    </div>
  );
}
