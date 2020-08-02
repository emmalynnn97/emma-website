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
            position:'absolute',
            right:'0',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            zIndex: '2',         
            marginRight:'75px',
            marginTop:'50px'   
        }
        const navLinkStyle = {
            margin: '0 1em',
            cursor: 'pointer',
            display: 'flex',
            fontSize: '28px',
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
