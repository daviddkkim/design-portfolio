import React, {useState} from 'react'
import './home.css';
import Boxes from '../components/box'
import Card from '../components/card/card'
import { ReactComponent as DeephireIcon } from '../assets/deephire.svg'
import MouseTooltip from 'react-sticky-mouse-tooltip';
  


function Home() {

    const [hover, setHover] = useState(false)
    //const history = useHistory();

    return (
        <div className='home-container'>
             <MouseTooltip
             visible={hover}
            offsetX={15}
            offsetY={10}
             >
                <span className='cursor-tooltip'>Drag to rotate canvas and scroll to zoom in/out</span>
            </MouseTooltip>
            <div className='intro-container'>
                <div className="intro-block">
                    
                    <span className='intro-hero'>Hey, I'm David.</span>
                    {/* <p className='intro-body'>During the day, I am a product manager building Eno,<br></br> a conversational AI platform at Capital One. <br></br>
                    At night, I'm a first-year Human-Centered Design graduate student at University of Washington.<br></br>
                    Previously, I was a senior software engineer at Capital One. </p> */}
                    <p className='intro-body'>
                    At night, I'm a <strong className= 'strong-white'>first-year Human-Centered Design graduate student </strong> at University of Washington.
                    <br></br>
                    <br></br>
                    During the day, I'm a <strong className= 'strong-white'>software-engineer-turned-product-manager</strong> building a conversational AI platform at Capital One. 
                    <br></br>
                    </p>
                    
                </div>
                <div className= "canvas-block" 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <Boxes></Boxes>
                </div>
            </div>
            <div className= 'project-container'>
                {/* <div className= 'section-title'> 
                <span className= 'title-text'>Product Design</span>
                </div> */}
                <div className= 'card-container'>
                <Card className = 'card-item' title='InterEd' content= 'Improving remote K-12 classroom interactions between teachers and students.' project={3} ></Card>

                    <Card  image= {DeephireIcon} title='Resi' content= 'Design Challenge: Restaurant Reservation during COVID-19' project={1} ></Card>
                    <Card className = 'card-item' title='Deephire' content= 'Designing an onboarding experience for a video-interview start-up' project={2} ></Card>

                </div>
            </div>
            <div className= 'bottom-footer'>
            <span className='footer-message'>Made with &hearts; by David</span>
            </div>
        
        </div>
    )
}

export default Home;