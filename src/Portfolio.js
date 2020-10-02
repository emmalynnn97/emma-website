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
        const containerStyle={
            display:'grid',
            gridGap:'10px',
            gridTemplateColumns:'auto auto auto auto',
            marginTop:'10vh',
            height:'100vh',
            padding:'5em',
        }
        const projectStyle={
            
        }
        const projectOverlayStyle={
            width:'100%',
            height:'100%',
            backgroundColor:'rgba(240, 220, 253, .1)'
        }
        return (
            <div>
                <Nav offset={2} links={[<Link className='link home-link' style={{color:'#383838',textDecoration:'none'}} to='/'>Home</Link>,<Link className='link about-link' style={{color:'#383838',textDecoration:'none'}} to='/about'>About</Link>,<Link className='link portfolio-link' style={{color:'#FF65DE',textDecoration:'none',fontWeight:'600'}} to='/portfolio'>Portfolio</Link>]}/>
                <div style={containerStyle} className='project-container'>
                    <div onClick={()=>{
                        window.location.href='https://timingchutes.com/'
                    }} style={projectStyle} className='project project-1'><div style={projectOverlayStyle} className='project-overlay'></div></div>
                    <div onClick={()=>{
                        window.location.href='https://ltsarizona.org/phoenix-charter-school/'
                    }} style={projectStyle} className='project project-2'><div style={projectOverlayStyle} className='project-overlay'></div></div>
                    <div onClick={()=>{
                        window.location.href='https://blog.summithut.com/'
                    }} style={projectStyle} className='project project-3'><div style={projectOverlayStyle} className='project-overlay'></div></div>
                    <div onClick={()=>{
                        window.location.href='https://mcfaddengavender.com/'
                    }} style={projectStyle} className='project project-4'><div style={projectOverlayStyle} className='project-overlay'></div></div>
                </div>
            </div>
        )
    }
}

export default Portfolio
