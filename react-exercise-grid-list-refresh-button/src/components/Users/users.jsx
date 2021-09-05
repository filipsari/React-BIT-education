import React from 'react'
//import { users} from '../../Data/data';

// import { getUsers } from '../../services/user-services';

import { ListView } from './components/ListView';
import { GridView} from './components/GridView';


export class Users extends React.Component {
 

  render (){
 

    return (
      this.props.nazivPropsa_isListView
      ? <ListView korisniciDva={this.props.nazivPropsa_korisniciJedan}/> 
      : <GridView korisniciDva={this.props.nazivPropsa_korisniciJedan}/>
    );
    };
  }

    