import React from "react";
import { NavLink} from "react-router-dom";

const navLinks = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "14%",
  borderRadius: "5px",
  border: "1px solid white",
  color: "white",
  backgroundColor: "transparent",
  fontSize: "20px",
  fontWeight: "bold",
  alignContent: "left",
  cursor: "pointer",
  active: {
    backgroundColor: "rgba(94, 151, 255, 0.4)",
  },
};

const navbar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const space = {
  margin: "8px 0px",
  padding: "12px",
  backgroundColor: "rgba(94, 151, 255, 0.4)",
};

function Navbar() {


  return (
    <div>
      <nav style={navbar}>
        <NavLink to="/" style={navLinks}>
          Home
        </NavLink>
        <NavLink to="/movies" style={navLinks}>
          Movies
        </NavLink>
        <NavLink to="/series" style={navLinks}>
          Series
        </NavLink>
        <NavLink to="/documentaries" style={navLinks}>
          Documentaries
        </NavLink>
        <NavLink to="/watchlist" style={navLinks}>
          WatchList
        </NavLink>
      </nav>
      <div style={space}></div>
    </div>
  );
}

export default Navbar;
