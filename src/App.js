import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'


const home = ()=><Home/>
const portfolio = ()=><Portfolio/>
const contact = ()=><Contact/>
const about = ()=><About/>
function App() {
  return (
    <Router style={{width:'100vw'}}>
     
      <Route exact path='/' component={home}></Route>
      <Route path='/portfolio' component={portfolio}></Route>
      <Route path='/contact' component={contact}></Route>
      <Route path='/about' component={about}></Route>
    
    </Router>
  );
}

export default App;
