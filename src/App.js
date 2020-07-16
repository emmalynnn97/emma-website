import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Blog from './Blog'
import Nav from './Nav'
import Footer from './Footer'

const home = ()=><Home/>
const portfolio = ()=><Portfolio/>
const contact = ()=><Contact/>
const blog = ()=><Blog/>
function App() {
  return (
    <Router>
      <Nav height='115px' finalHeight='60px' bgColor='url("https://www.transparenttextures.com/patterns/paper-fibers.png")' links={[<Link to='/'>Home</Link>,<Link to='/blog'>Blog</Link>,<Link to='/portfolio'>Portfolio</Link>,<Link to='contact'>Contact</Link>]}/>
      <Route exact path='/' component={home}></Route>
      <Route path='/portfolio' component={portfolio}></Route>
      <Route path='/contact' component={contact}></Route>
      <Route path='/blog' component={blog}></Route>
      <Footer content={<><h2 style={{margin:'0 2.5vw',color:'white'}}>Emma Lynn Web Development</h2><a rel="noopener noreferrer" target="_blank" href="https://github.com/emmalynnn97"><img src="https://cosmic-s3.imgix.net/4ae87a70-a3b1-11ea-8370-b9ea0c50cbb0-GitHub-Mark-Light-32px.png" alt="github logo" /></a></>} bgColor='linear-gradient(180deg,rgba(0,0,70,.2),rgba(0,0,70,1) )'/>
    </Router>
  );
}

export default App;
