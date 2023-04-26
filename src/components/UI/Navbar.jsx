import React from "react";
import LaptopNav from "./LaptopNav";
import PhoneNav from "./PhoneNav";

function Navbar() {

  return (
    <div>
      <div>
        <LaptopNav />
      </div>

      <div>
        <nav>
          <PhoneNav />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
