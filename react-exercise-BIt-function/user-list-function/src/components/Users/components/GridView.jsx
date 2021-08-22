import React from "react";
// import { myData1 } from "../../../Data/data";

export const GridView = ( { korisnici } ) => {
  return (



     <div className="row container">

        {korisnici.map((element) => ( 
        <div className="col s2 m4 row">
          <div className="card">
            <div className="card-image">
              <img src={element.picture.large} />
              <span className="card-title">{element.name.first}</span>
            </div>
            <div className="card-content">
              <p> {element.email}</p>
              <p> {element.dob.date}</p>
            </div>
          </div>
           </div>
        ))}
     
    </div>


  );

};
