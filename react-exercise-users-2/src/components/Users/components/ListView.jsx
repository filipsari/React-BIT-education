import React from 'react';

export const ListView = ({korisnici}) => {
  return ( 


  <ul className="collection">

     {korisnici.map( 
       (element) => ( 
    <li className="collection-item avatar">
      <img src={element.picture.thumbnail} alt="" className="circle"/>
      <span className="title">{element.name.first}</span>
      <a href="#!" className="secondary-content"></a>
    </li>
    ))
     }
     </ul>
     
     )

}