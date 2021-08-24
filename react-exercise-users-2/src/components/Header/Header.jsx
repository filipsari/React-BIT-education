import React from "react";

export const Header = ({ isListView, onLayoutToggle, refreshUsers }) => {
  console.log("Header: ", isListView);
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo"></a>
        <a className="waves-effect waves-light btn" onClick={onLayoutToggle}>
          {" "}
          {isListView ? "List View" : "Grid View"}{" "}
        </a>

        <a className="waves-effect waves-light btn"  onClick={refreshUsers}>
              Reset Button
        </a>
      
      </div>
      
    </nav>
  );
};
