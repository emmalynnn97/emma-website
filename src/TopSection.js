import React, { Component } from 'react'
export class TopSection extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             specialTagColor:'#383838'
        }
        this.colorSpecialTag = this.colorSpecialTag.bind(this);
    }
    
    colorSpecialTag(){
            this.setState({specialTagColor:'#FF65DE'})
    }
    componentDidMount(){
        window.addEventListener('scroll', this.colorSpecialTag)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.colorSpecialTag)
    }
    
    render() {
        const containerStyle={
            height:'100vh',
            width:'100%',
            background:'linear-gradient(180deg, rgba(255, 237, 251, 0.36), #ffedfb)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }
        const largeHeadingStyle={
            fontWeight:'normal',
            fontFamily:'Montserrat',
            letterSpacing: '0.015em',
            lineHeight:'85px',
            fontSize:'2.75em',
            color:'#383838',
        }
        const viewMoreStyle={
            fontWeight:'normal',
            fontFamily:'Montserrat',
            fontSize:'1.75em',
            marginBottom:'.5em',
            position:'relative',
        }
        const specialTagStyle={
            color:this.state.specialTagColor,
            transition:'.25s ease-in'
        }
        return (
            <div style={containerStyle}>
                <h1 className='top-section-heading' style={largeHeadingStyle}>Hi, I'm <span style={specialTagStyle}>Emma Lynn</span>,<br/>a front end web <span style={specialTagStyle}>developer</span><br/>and <span style={specialTagStyle}>designer</span>.</h1>
                <div className='view-more-box' onClick={()=>{
                    window.scrollTo({ top: 750, behavior: 'smooth' });
                }}  style={{cursor:'pointer',textAlign:'center',position:'relative',top:'5em'}}><h2 className='view-more-text' style={viewMoreStyle}>View More</h2><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-down-circle" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF65DE" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="8" y1="12" x2="12" y2="16" />
  <line x1="12" y1="8" x2="12" y2="16" />
  <line x1="16" y1="12" x2="12" y2="16" />
</svg></div>
            </div>
        )
    }
}

export default TopSection
