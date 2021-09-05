import React from "react";

export const Header = ({ nazivPropsa_ListaIzgled, nazivPropsa_onLayoutToggle, nazivPropsa_refreshUsers }) => {
  console.log("Header: ", nazivPropsa_ListaIzgled);



  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo"></a>

        <a className="waves-effect waves-light btn" onClick={nazivPropsa_onLayoutToggle}>
          {nazivPropsa_ListaIzgled ? "Ovo je : Grid View" : " Ovo je: List View"}
        </a>

        <a className="waves-effect waves-light btn"  onClick={nazivPropsa_refreshUsers}>
              Reset Button
        </a>
      
      </div>
      
    </nav>
  );
};
