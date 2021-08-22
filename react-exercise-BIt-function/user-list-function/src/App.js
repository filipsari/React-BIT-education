import React, {Fragment, Component, useState} from 'react';
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Users} from './components/Users/users'



function App() {

const [isListView, setisListView] = useState(true); 

const onLayoutToggle = () => {
    setisListView(!isListView)
}
return (
      <Fragment> 
      <Header isListView={isListView} onLayoutToggle={onLayoutToggle}/> 
      <Users isListView={isListView}/> 
      <Footer/>
      </Fragment>
    );

}

export default App;