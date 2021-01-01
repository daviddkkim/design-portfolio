import React from 'react'
import './about.css';
import headshot from '../assets/david.jpg'

function About() {

    return (
        <div>
        <div className= 'about-container'>
            <div className='about-block'>
                <p className='about-hero'>
                    Hi, I'm David.
                </p> 
                <p className= 'about-regular'>
                    To be honest, I'm still trying to find my place in the professional world - so far, I've been a software engineer, product manager and designer, and enjoyed them all.
                    <br/>
                    <br/>
                    One thing I am certain about is that <strong style={{color:'white'}}>I am the happiest when I am given the creative freedom to problem solve and design for the betterment of customers.</strong> 
                </p>
            </div>
            <div className='about-block'>
                <img className= 'about-image' src={headshot} alt='headshot'></img>
            </div>
            
        </div>
        <div className= 'bottom-footer'>
            <span className='footer-message'>Made with &hearts; by David</span>
            <div className='social-media'> 
                <a className='social-media-link' href='https://www.linkedin.com/in/david-kim-b21156108/'>linkedin</a>
                <a className='social-media-link' href='https://github.com/dkkimdk'>github</a>
            </div>
            </div>
        </div>
        
    )
}

export default About;