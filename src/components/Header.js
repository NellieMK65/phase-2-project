import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";

function Header({ setSearchTerm, noSearch }) {
  return (
    <div>
      <Logo />
      {!noSearch && <Search setSearchTerm={setSearchTerm} />}
      <Navbar />
    </div>
  );
}

export default Header;
