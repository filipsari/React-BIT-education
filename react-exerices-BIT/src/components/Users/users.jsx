import React from 'react'
import { users} from '../../Data/data'

import { ListView } from './components/ListView';


export const Users = () => {
  return (
    <ListView users={users}/> 
  )
     };


    