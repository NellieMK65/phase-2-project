import React from "react";
import { NavLink }from "react-router-dom";


function Header(){
  return (
    <div>
      <NavLink to = "./"><header className="header">#NewsBinge</header></NavLink>
    </div>
    )
}

export default Header;