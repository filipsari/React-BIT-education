import React, {Fragment, Component} from 'react';

import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Users} from './components/Users/users';
import {getUsers} from './services/user-services';


class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       isListView: true,
       nizUsersa : []
     };
     this.onLayoutToggle = this.onLayoutToggle.bind(this);
     this.refreshUsers = this.refreshUsers.bind(this);
   }

   onLayoutToggle(){
     this.setState({
       isListView: !this.state.isListView
     });
   };

   refreshUsers(){
     getUsers().then(response => this.setState(  {nizUsersa : response} )) 
   }

  
  componentDidMount(){
    getUsers().then(nizUsersa => this.setState( {...this.state, nizUsersa}))
  }


   render() { 
    console.log('App ', this.state.isListView);
  return (
    <Fragment> 
    <Header nazivPropsa_ListaIzgled={this.state.isListView} nazivPropsa_onLayoutToggle={this.onLayoutToggle}
            nazivPropsa_refreshUsers={this.refreshUsers}/> 
    
    <Users nazivPropsa_isListView={this.state.isListView} nazivPropsa_korisniciJedan={this.state.nizUsersa}/> 
    <Footer/>
    </Fragment>
  );
   }
}

export default App;
