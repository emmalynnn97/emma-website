import React, { Component } from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'
import me from './me.jpg'
import linkedin from './linkedin.png'
import github from './github.png'

export class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const containerStyle={
            background:'linear-gradient(180deg, rgba(255, 237, 251, 0.36), #ffedfb)',
            height:'100vh',
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }
        const leftStyle={
            display:'flex',
            flexDirection:'column',
            margin:'0 2em',
            width:'50%'
        }
        const headingStyle={
            fontWeight:'normal',
            fontFamily:'Montserrat',
            fontSize:'2.75em',
            color:'#383838',
            margin:'0'
        }
        const iconRowStyle={
            display:'flex',
            margin:'1.5em 0',
            alignItems:'center'
        }
        return (
            <>
            <Nav offset={2} links={[<Link className='link home-link' style={{color:'#383838',textDecoration:'none'}} to='/'>Home</Link>,<Link className='link about-link' style={{color:'#FF65DE',textDecoration:'none',fontWeight:'600'}} to='/about'>About</Link>,<Link className='link portfolio-link' style={{color:'#383838',textDecoration:'none'}} to='/portfolio'>Portfolio</Link>]}/>
            <div className='about-container' style={containerStyle}>
                    <div  className='about-left' style={leftStyle}>
                        <h1 className='about-heading' style={headingStyle}><span>Development</span> Meets <span>Design</span></h1>
                        <p>I am a front end developer with 2+ years of experience producing visually appealing websites in HTML5, CSS3, ES5/ES6 JavaScript, and PHP7. Some of my recent projects include WooCommerce and Shopify powered Ecommerce Stores.</p>
                        <div className='icon-row' style={iconRowStyle}>
                            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/emma-guy-639014189/"><img src={linkedin} alt="linkedin link"></img></a>
                            <a target='_blank' rel="noopener noreferrer" href="https://github.com/emmalynnn97"><img src={github} alt="linkedin link"></img></a>
                        </div>                   
                    </div>
                    <div className='about-right'>
                        <img src={me} alt="Emma Lynn"/>
                    </div>
            </div>
            </>
        )
    }
}

export default About
