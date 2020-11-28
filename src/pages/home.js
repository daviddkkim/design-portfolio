import React, {useState} from 'react'
import './home.css';
import Boxes from '../components/box'
import Card from '../components/card/card'
import { ReactComponent as DeephireIcon } from '../assets/deephire.svg'
import {
    Link
  } from "react-router-dom"
  import MouseTooltip from 'react-sticky-mouse-tooltip';
  


function Home() {

    const [hover, setHover] = useState(false)


    return (
        <div className='home-container'>
             <MouseTooltip
             visible={hover}
            offsetX={15}
            offsetY={10}
             >
                <span className='cursor-tooltip'>Drag to rotate canvas and click on individual boxes to change color</span>
            </MouseTooltip>
            <div className='intro-container'>
                <div className="intro-block">
                    
                    <span className='intro-hero'>Hey, I'm David:</span>
                    {/* <p className='intro-body'>During the day, I am a product manager building Eno,<br></br> a conversational AI platform at Capital One. <br></br>
                    At night, I'm a first-year Human-Centered Design graduate student at University of Washington.<br></br>
                    Previously, I was a senior software engineer at Capital One. </p> */}
                    <p className='intro-body'>
                    A first-year <b>Human-Centered Design graduate student</b> at University of Washington.
                    <br></br>
                    A <b>Product manager</b> building Eno, a conversational AI platform, at Capital One. 
                    <br></br>
                    An <b>Ex- Senior software engineer</b> at Capital One.</p>
                    <Link to='/' className= 'link'>About</Link>
                    
                </div>
                <div className= "canvas-block" 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <Boxes></Boxes>
                </div>
            </div>
            <div className= 'project-container'>
            <div className= 'section-title'> 
            <span className= 'title-text'>Past Design Work</span>
            </div>
            <div className= 'card-container'>
                <Card className = 'card-item' image= {DeephireIcon} title='Project 1' content= 'something something' ></Card>
                <Card className = 'card-item' title='Project 2' content= 'something something something else' ></Card>
            </div>

        </div>
        
        </div>
    )
}

export default Home;