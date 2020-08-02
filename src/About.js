import React, { Component } from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'
export class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Nav height='115px' finalHeight='60px' bgColor='url("https://www.transparenttextures.com/patterns/paper-fibers.png")' links={[<Link className='link home-link' style={{color:'#383838',textDecoration:'none'}} to='/'>Home</Link>,<Link className='link about-link' style={{color:'#FF65DE',textDecoration:'none',fontWeight:'600'}} to='/about'>About</Link>,<Link className='link contact-link' style={{color:'#383838',textDecoration:'none'}} to='/contact'>Contact</Link>,<Link className='link portfolio-link' style={{color:'#383838',textDecoration:'none'}} to='/portfolio'>Portfolio</Link>]}/>
                About Page
            </div>
        )
    }
}

export default About
