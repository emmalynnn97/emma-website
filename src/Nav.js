import React, { Component } from 'react'

export class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bgColor: this.props.bgColor,
            links: this.props.links,
            height:this.props.height,
            finalHeight:this.props.finalHeight
        }
        this.adjustHeight = this.adjustHeight.bind(this)
    }
    adjustHeight(){
        const shrinkOn = 100
        if (window.pageYOffset > shrinkOn) {
            this.setState({height:this.state.finalHeight})
        }
        else {
            this.setState({height:this.props.height})
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.adjustHeight)
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.adjustHeight);
    }
    render() {
        const navStyle = {
            height: this.state.height,
            width: '100%',
            backgroundAttachment:'fixed',
            background: this.state.bgColor,
            boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`,
            maxHeight: '125px',
            minHeight: '50px',
            position: 'fixed',
            left: '0',
            top: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '2',
            transition:'.15s ease'
        }
        const navLinkStyle = {
            margin: '0 2.5vw',
            cursor: 'pointer',
            width: '75px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            fontSize: '20px',
            fontWeight: '600',
            letterSpacing: '1.25px'
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
