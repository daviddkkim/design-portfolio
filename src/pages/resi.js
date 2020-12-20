import React from 'react'
import './resi.css';
import moneyShot from '../assets/Moneyshot2.png'
import research1 from '../assets/research1.png'
import research2 from '../assets/research2.png'
import research3 from '../assets/research3.png'
import restaurant from '../assets/restaurant-resize.png'

function Resi() {

    return (
    <div>
        {/* <div className='intro-image-container'>
        <img src={restaurant} className="responsive-image"></img>
        <div className='centered-text'> 
        <p>d</p>
        <p className='project-problem-statement'>Let's go</p>
        </div> */}
        <div className='hero-image'>
            <div className='hero-image-text-container'>
            <h5 className='hero-image-text-small'>Product Design Concept</h5>
            <h4 className='hero-image-text-big'> Helping local restaurants get back dine-in customers. </h4>
            </div>
        </div>
        <div >
        <div className='intro-wrapper margin-wrapper'>
            <section className='project-title'>
                <h3 className='title-name'>Resi</h3>
                <p className='title-description'>Restaurant reservation concept centered around transparency</p>
                <h4 className='project-problem-statement'> How can we help  <strong class='strong-purple'>local restaurants stay afloat in light of COVID-19?</strong> </h4>
                <p className='project-content-text  regular-text'>
                Many local restaurants are closing due to lack of dine-in customers. 
                My research showed that customers prefer making reservations for their first-time back dining-in however they are hesitant due to the unknowns introduced by COVID-19.
                To tackle this issue, I introduced a new reservation experience where customers can assess and choose their table at the time of reservation.            
                </p>
            </section>
            <section className='project-role'>
                <p className='project-role-title'><strong class='strong-white'>Role</strong>
                <br></br>
                UX Designer, Researcher
                </p>
                <p className='project-role-title'>
                <strong class='strong-white'>Team</strong>
                <br></br>
                Solo Project
                </p>
                <p className='project-role-title'>
                <strong class='strong-white'>Timeline</strong>
                <br></br>
                2 weeks (April, 2020)
                </p>
            </section>
        </div>
        <img src="/static/media/secondPic.4990627d.png" className="responsive-image"></img>
        <div className='content-wrapper margin-wrapper'>
            <section className='project-content'>
                <h5 className='project-content-title'>Research & Key Insights</h5>
                <p className='project-hero-text'>
                    "There's so much <strong class='strong-purple'>unknown</strong> as to what the <strong class='strong-purple'>environment</strong> is going to be like." - Emily
                </p>
                <p className='project-content-text'>
                • Customers prefer reservations for their first-time back dining-in.
                <br/>
                • Most common pain point for customers is that they cannot know what the restaurant experience is going to be like before showing up. Will it be crowded? Will they be cleanly? Will they enforce social distancing?             
                </p>
                <div className='set-image-container'>
                <img src={research1} className="responsive-set-image"></img>
                <img src={research2} className="responsive-set-image"></img>
                <img src={research3} className="responsive-image"></img>
                </div>

               {/*  <div className='money-shot-container'>
                    <img className='money-shot' src={moneyShot}/>
                </div> */}
            </section>
            <section className='project-content'>
                <h5 className='project-content-title'>Framing the Problem</h5>
                <p className='project-hero-text'>
                    How might we <strong class='strong-purple'>help covid-concious customers feel ensured that their reserved dining experience will match their COVID-19 preferences?</strong>
                </p>
                <p className='project-content-text'>
                Majority of customers will be making reservations on their way back to dining-normalcy. Main blocker for customers looking to make reservation is the unknown around restaurant environment. What are some ways we can bring the needed clarity here?         
                </p>
               

               {/*  <div className='money-shot-container'>
                    <img className='money-shot' src={moneyShot}/>
                </div> */}
            </section>
            <section className='project-content'>
                <h5 className='project-content-title'>Ideation</h5>
                <p className='project-hero-text'>
                    How might we <strong class='strong-purple'>help covid-concious customers feel ensured that their reserved dining experience will match their COVID-19 preferences?</strong>
                </p>
                <p className='project-content-text'>
                Majority of customers will be making reservations on their way back to dining-normalcy. Main blocker for customers looking to make reservation is the unknown around restaurant environment. What are some ways we can bring the needed clarity here?         
                </p>
               

               {/*  <div className='money-shot-container'>
                    <img className='money-shot' src={moneyShot}/>
                </div> */}
            </section>
        </div>
        </div>
    </div>
    )
}


export default Resi;