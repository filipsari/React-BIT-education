import React from "react";
import "../App.css";

const Header = ({ title }) => {
  return (
    <header className="main-header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
