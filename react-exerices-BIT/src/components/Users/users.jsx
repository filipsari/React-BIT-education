import React from 'react'
import { users} from '../../Data/data'

// import { getUsers } from '../../services/user-services';

import { ListView } from './components/ListView';
import { GridView} from './components/GridView';


export const Users = ({isListView}) => {
  return (
    isListView
    ? <ListView users={users}/> 
    : <GridView users={users}/>
  )
     };


    