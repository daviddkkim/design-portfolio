import * as React from 'react';
import './home.css';
import { Canvas } from "react-three-fiber"
import Box from '../components/box'
import Card from '../components/card/card'
import { ReactComponent as DeephireIcon } from '../assets/deephire.svg'

function Home() {

    return (
        <div className='home-container'>
            <div className='intro-container'>
                <div className="intro-block">
                    
                    <span className='intro-hero'>Hey,
                    <br></br> 
                    I'm David:</span>
                    {/* <p className='intro-body'>During the day, I am a product manager building Eno,<br></br> a conversational AI platform at Capital One. <br></br>
                    At night, I'm a first-year Human-Centered Design graduate student at University of Washington.<br></br>
                    Previously, I was a senior software engineer at Capital One. </p> */}
                    <p className='intro-body'>
                    A first-year <b>Human-Centered Design graduate student</b> at University of Washington.
                    <br></br>
                    <br></br>
                    <b>Product manager</b> building Eno, a conversational AI platform, at Capital One. 
                    <br></br>
                    <br></br>
                    <b>Ex- Senior software engineer</b> at Capital One.</p>
                    
                </div>
                <div className= "canvas-block">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Box position={[0, -1.2, 0]} />
                    <Box position={[0, 1.2, -1]} />
                </Canvas>
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