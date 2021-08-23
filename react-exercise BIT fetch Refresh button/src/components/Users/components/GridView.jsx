import React from "react";

export const GridView = ({users}) => {
  return (



     <div className="row container">

        {users.map((element) => ( 
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
