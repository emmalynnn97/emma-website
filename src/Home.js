import React, { Component } from 'react'
import TopSection from './TopSection'
import Nav from './Nav'
import {Link} from 'react-router-dom'
import FeaturedProjects from './FeaturedProjects'
import HomeContactSection from './HomeContactSection'
export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div style={{height:'200vh'}}>
               <Nav height='115px' finalHeight='60px' bgColor='url("https://www.transparenttextures.com/patterns/paper-fibers.png")' links={[<Link className='link home-link' style={{color:'#FF65DE',textDecoration:'none', fontWeight:'600'}} to='/'>Home</Link>,<Link className='link about-link' style={{color:'#383838',textDecoration:'none'}} to='/about'>About</Link>,<Link className='link portfolio-link' style={{color:'#383838',textDecoration:'none'}} to='/portfolio'>Portfolio</Link>]}/>
               <TopSection/>
               <FeaturedProjects/>
               <HomeContactSection/>
            </div>
        )
    }
}

export default Home
