import React, { Component } from 'react'

export class HomeContactSection extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const containerStyle={
            backgroundColor:'#FFEDFB',
            height:'65vh',
            width:'100%',
            display:'flex',
            justifyContent:'center'
        }
        const formContainerStyle={
            height:'75%',
            width:'75%',
            backgroundColor:'#FFB9F0',
            position:'relative',
            top:'-2.5em',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            padding:'2.5em'
        }
        const formStyle={
            display:'flex',
            flexDirection:'column',
            margin:'1em 0',
        }
        const contactHeadingStyle={
            fontWeight:'normal',
            fontFamily:'Montserrat',
            fontSize:'1.75em',
            color:'#383838',
            margin:'0'
        }
        const inputSectionStyle={
            display:'flex',
            flexDirection:'column',
            color:'#383838',
            margin:'0 1em'
        }
        const firstInputSectionStyle={
            display:'flex',
            color:'#383838'
        }
        const inputStyle={
            padding:'.5em',
            backgroundColor:'#FFEDFB',
            border:'none'
        }
        const labelStyle={
            margin:'.25em 0',
            fontSize:'1em'
        }
        const messageStyle={
            height:'5em',
            backgroundColor:'#FFEDFB'
        }
        const submitStyle={
            margin:'1em auto',
            width:'40%',
            padding:'.25em .25em',
            fontFamily:'Montserrat',
            fontSize:'1.25em',
            backgroundColor:'#FFEDFB',
            border:'none',
            cursor:'pointer',
            transition:'.25 ease'
        }
        return (
            <div style={containerStyle}>
                <div className='form-container' style={formContainerStyle}>
                    <h3 style={contactHeadingStyle}>Contact Me</h3>
                    <form style={formStyle}>
                        <div style={firstInputSectionStyle}>
                            <div style={inputSectionStyle}>
                            <label style={labelStyle}>First Name</label>
                            <input style={inputStyle} name="first" id="first" type="text" required></input>
                            </div>
                            <div style={inputSectionStyle}>
                            <label style={labelStyle}>Last Name</label>
                            <input style={inputStyle} name="last" id="last" type="text" required></input>
                            </div>
                        </div>
                        <div style={firstInputSectionStyle}>
                        <div style={inputSectionStyle}>
                            <label style={labelStyle}>Email</label>
                            <input style={inputStyle} name="email" id="email" type="email" required></input>
                        </div>
                        <div style={inputSectionStyle}>
                            <label style={labelStyle}>Subject</label>
                            <input style={inputStyle} name="subject" id="subject" type="text"></input>
                        </div>
                        </div>
                        <div style={inputSectionStyle}>
                            <label style={labelStyle}>Message</label>
                            <textarea style={messageStyle}></textarea>
                        </div>
                        <input style={submitStyle} type="submit" value="Submit"></input>
                    </form>
                    </div>
            </div>
        )
    }
}

export default HomeContactSection
