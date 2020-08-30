import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
            justifyContent:'space-between',
            width:'70%'
        }
        const projStyle={
            height:'12.5em',
            width:'12.5em',
            border:'2px solid black'
        }
        const allProjLinkStyle ={
            fontWeight:'normal',
            fontFamily:'Montserrat',
            fontSize:'1.75em',
            color:'#FF65DE',
            margin:'0',
        }
        return (
            <div className='proj-container' style={containerStyle}>
                <h2 style={projHeadingStyle}>Featured Projects</h2>
                <div className='proj-row' style={projContainerStyle}>
                    <div style={projStyle}></div>
                    <div style={projStyle}></div>
                    <div style={projStyle}></div>
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
