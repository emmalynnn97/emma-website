import React, { Component } from 'react'
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import FeaturedBlogs from './FeaturedBlogs'
export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div style={{height:'200vh'}}>
               <Hero/>
               <FeaturedProjects/> 
               <FeaturedBlogs/>
            </div>
        )
    }
}

export default Home
