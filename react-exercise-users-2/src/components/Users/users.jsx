import React from 'react'
//import { users} from '../../Data/data';

// import { getUsers } from '../../services/user-services';

import { ListView } from './components/ListView';
import { GridView} from './components/GridView';


export class Users extends React.Component {
 

  render (){
 

    return (
      this.props.isListView
      ? <ListView korisnici={this.props.korisnici}/> 
      : <GridView korisnici={this.props.korisnici}/>
    );
    };
  }

    