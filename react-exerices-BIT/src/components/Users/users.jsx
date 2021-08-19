import React from 'react'
import { users} from '../../Data/data'

export const Users = () => {
 
  return (
    <ul class="collection">
     
     {users.map( 
       (user) => ( 

  
    <li class="collection-item avatar">
      <img src="images/yuna.jpg" alt="" class="circle"/>
      <span class="title">Title</span>
      <p>First Line
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    ))
     }
     </ul>
     );
     };


    