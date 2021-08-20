import React from 'react';

export const ListView = ({users}) => {
  return ( 


  <ul className="collection">
     {users.map( 
       (element) => ( 
    <li className="collection-item avatar">
      <img src={element.picture.thumbnail} alt="" className="circle"/>
      <span className="title">{element.name.first}</span>
      <p>{element.location.street}</p>
      <p>{element.location.city}</p>
      <a href="#!" className="secondary-content"></a>
    </li>
    ))
     }
     </ul>
     )

}