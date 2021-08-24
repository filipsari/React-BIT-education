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
       users : []
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
     getUsers().then(users => this.setState({users}))
   }

  
  componentDidMount(){
    getUsers().then(users => this.setState({users}))
  }



   render() { 
    console.log('App ', this.state.isListView);
  return (
    <Fragment> 
    <Header isListView={this.state.isListView} onLayoutToggle={this.onLayoutToggle}
            refreshUsers={this.refreshUsers}/> 
    

    <Users isListView={this.state.isListView} korisnici={this.state.users}/> 
    <Footer/>
    </Fragment>
  );
   }
}

export default App;
