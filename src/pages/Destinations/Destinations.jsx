import React from "react";
import { Link } from "react-router-dom";

const Destinations = () => {
  return (
    <div>
      <Link to="/destinations/charlotte"><p>Charlotte</p></Link>
      <Link to="/destinations/puerto-rico"><p>Puerto Rico</p></Link>
      <Link to="/destinations/london"><p>London</p></Link>
      <Link to="/destinations/brazil"><p>Brazil</p></Link>
    </div>
  );
};

export default Destinations;
