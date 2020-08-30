import React, { Component } from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'
export class Portfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Nav height='115px' finalHeight='60px' bgColor='url("https://www.transparenttextures.com/patterns/paper-fibers.png")' links={[<Link className='link home-link' style={{color:'#383838',textDecoration:'none'}} to='/'>Home</Link>,<Link className='link about-link' style={{color:'#383838',textDecoration:'none'}} to='/about'>About</Link>,<Link className='link portfolio-link' style={{color:'#FF65DE',textDecoration:'none',fontWeight:'600'}} to='/portfolio'>Portfolio</Link>]}/>
                Portfolio Page
            </div>
        )
    }
}

export default Portfolio
