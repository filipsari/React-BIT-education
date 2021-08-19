import React, {Fragment} from 'react';
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Users} from './components/Users/users'

function App() {
  return (
    <Fragment> 
    <Header/> 
    <Users/>
    <Footer/>
    </Fragment>
  );
}

export default App;
