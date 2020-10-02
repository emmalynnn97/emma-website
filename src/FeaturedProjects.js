import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TimingChutes from './timingchutes.png'
import ACS from './ACS.png'
import design from './design.jpg'
export class FeaturedProjects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const containerStyle={
            height:'65vh',
            width:'100%',
            backgroundColor:'#FFD6F6',
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            flexDirection:'column'
        }
        const projHeadingStyle={
            fontWeight:'normal',
            fontFamily:'Montserrat',
            fontSize:'2em',
            color:'#383838',
            margin:'0'
        }
        const projContainerStyle={
            display:'flex',
            justifyContent:'space-evenly',
            width:'100%',
            maxWidth:'1400px',
            flexWrap:'wrap'
        }
        const projStyle={
           
        }
        const allProjLinkStyle ={
            fontWeight:'normal',
            fontFamily:'Montserrat',
            fontSize:'1.75em',
            color:'#FF65DE',
            margin:'0',
            display:'flex',
            alignItems:'center'
        }
        return (
            <div className='proj-container' style={containerStyle}>
                <h2 style={projHeadingStyle}>Featured Projects</h2>
                <div className='proj-row' style={projContainerStyle}>
                    <div style={projStyle}>
                       <a target="_blank" rel="noopener noreferrer" href="https://timingchutes.com/"><img src={TimingChutes} alt="timing chutes website"/></a>
                    </div>
                    <div style={projStyle}>
                    <img src={design} alt="ecommerce shop design/development"/>
                    </div>
                    <div style={projStyle}>
                    <a href="https://ltsarizona.org/phoenix-charter-school/" target="_blank"rel="noopener noreferrer"><img src={ACS} alt="ACS Refresh"/></a>
                    </div>
                </div>
                <Link style={allProjLinkStyle} to='/portfolio'>All Projects <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 45.5C36.7696 45.5 45.5 36.7696 45.5 26C45.5 15.2304 36.7696 6.5 26 6.5C15.2304 6.5 6.5 15.2304 6.5 26C6.5 36.7696 15.2304 45.5 26 45.5Z" stroke="#FF65DE" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.6666 26H17.3333" stroke="#FF65DE" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.6667 26L26 34.6667" stroke="#FF65DE" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.6667 26L26 17.3333" stroke="#FF65DE" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</Link>
            </div>
        )
    }
}

export default FeaturedProjects
