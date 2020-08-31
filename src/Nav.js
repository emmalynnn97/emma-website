import React, { Component } from 'react'

export class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            links: this.props.links,
            height:this.props.height,
        }
     
    }
    
    render() {
        const navStyle = {
            backgroundColor:'#FFF6FD',
            right:'0',
            top:'0',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            zIndex: '2',         
            padding:'2em 1.5em'
        }
        const navLinkStyle = {
            margin: '0 1em',
            cursor: 'pointer',
            display: 'flex',
            fontSize: '1.75em',
            fontFamily:'Montserrat',
        }
        return (
            <div className='nav' style={navStyle}>
                {
                    this.state.links.map((link,key) => <div key={key} className='nav-link' style={navLinkStyle}>{link}</div>)
                }
                
            </div>


        )
    }
}

export default Nav
