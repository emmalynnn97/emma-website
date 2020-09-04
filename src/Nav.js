import React, { Component } from 'react'

export class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            links: this.props.links,
            offset:this.props.offset,
            bgColor:''
        }
        this.adjustHeight=this.adjustHeight.bind(this);
    }
    adjustHeight(){
        const shrinkOn = 125;
        if (document.documentElement.scrollTop || window.pageYOffset > shrinkOn) {
            this.setState({offset:1,bgColor:'rgba(255,255,255,.85)'})
        }
        else {
            this.setState({offset:this.props.offset,bgColor:''})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.adjustHeight)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.adjustHeight)
    }
    render() {
        const navStyle = {
            position:'fixed',
            right:'0',
            top:'0',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            zIndex: '2',         
            padding:`${this.state.offset}em 1.5em`,
            transition:'.15s ease-in',
            backgroundColor:this.state.bgColor,
            width:'100%'
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
