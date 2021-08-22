import React from 'react'
import { myData1 } from '../../Data/data'

// import { getUsers } from '../../services/user-services';

import { ListView } from './components/ListView';
import { GridView} from './components/GridView';


export const Users = ({isListView}) => {
  return (
    isListView
    ? <ListView korisnici={myData1}/> 
    : <GridView korisnici={myData1}/>
  )
     };


    