import React from 'react'
import './resi.css';
import research1 from '../assets/research1.png'
import research2 from '../assets/research2.png'
import research3 from '../assets/research3.png'
import loadingVid1 from '../assets/Loading_First.mp4'
import loadingVid2 from '../assets/Loading_Second.mp4'
import chatVid from '../assets/Chat_Feature_cut.mp4'
import reserveVid from '../assets/Reserve.mp4'
import trafficVid from '../assets/Check_Traffic.mp4'
import {Link} from 'react-router-dom';
import heroRestaurant from '../assets/restaurant-1.png'

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
            <img src={heroRestaurant} className='background-image' alt='hero-image1'></img>
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
        <img src="/static/media/secondPic.4990627d.png" className="responsive-image" alt='break-image1'></img>
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
                <img src={research1} className="responsive-set-image" alt='research-image1'></img>
                <img src={research2} className="responsive-set-image" alt='research-image2'></img>
                <img src={research3} className="responsive-image" alt='research-image3'></img>
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
            </section>
            </div>

            <section className='video-section'>
            <video autoPlay loop muted className='video'>
                <source src={loadingVid1} type='video/mp4'/>
            </video>
            <video autoPlay loop muted className='video'>
                <source src={loadingVid2} type='video/mp4'/>
            </video>
            </section>
            <div className='content-wrapper margin-wrapper'>

            <section className='project-content'>
                <h5 className='project-content-title'>Ideation</h5>
                <p className='project-content-text'>
                    When looking at the question, "How might we help covid-concious customers feel ensured that their reserved dining experience will match their COVID-19 preferences?", the main pain points were centered around the uncertainty customers felt when thinking about going back to restaurants. Here are the highlighted ideas that I brainstormed.
                </p>
                <p className='project-content-big-text'>
                <strong className='strong-white'>
                    1. <strong className='strong-purple'>Visualization of the restaurant layout </strong> for users to assess and choose the table they dine in. 
                </strong>
                </p>
                <p className='project-content-text'>
                Questions like "how close would I be to other customers?" and "how crowded would the restaurants be?" sat atop customer's minds. I hypothesized that a visual representation of the restaurant layout and the ability to reserve a specific table would empower the customer to be confident in making the reservation.
                </p>
                <p className='project-content-big-text'>
                <strong class='strong-white'>
                    2. <strong className='strong-purple'>Chat feature </strong> for users and restaurants to connect and demystify COVID-19 concerns. 
                </strong>
                </p>
                <p className='project-content-text'>
                Guidelines on COVID-19 are rapidly changing. Restaurants are not providing customers with the right information on how they are tackling them. Having to call restaurnats added unecessary friction. I hypothesized that a chat feature to communicate seemlessly with restaurnats will drive up customer's confidence.
                </p>
                <p className='project-content-big-text'>
                <strong className='strong-white'>
                    3. <strong className='strong-purple'>Reservation receipt</strong> for users to check table traffic of the restaurant all the way up to reservation. 
                </strong>
                </p>
                <p className='project-content-text'>
                Things can change from the moment the customers make the reservation and until they have to show up. I hypothesized that giving customers a way to keep up-to-date with the restaurant traffic will help customers make the reservation and ultimately have a better dining experience.
                </p>
            </section>
            <section className='project-content'>
                <h5 className='project-content-title'>Proposed Features</h5>
                <p className='project-hero-text'>
                    Resi
                </p>
                <p className='project-content-text'>
                Make dining reservations without the uncertainty.
                </p>
                <section className="feature-section">
                    <video autoPlay loop muted className='feature-video'>
                        <source src={reserveVid} type='video/mp4'/>
                    </video>
                    <section className='project-feature-content'>
                    <p className="project-feature-big-text"> <strong className="strong-purple">Assess</strong> <strong className="strong-white"> the restaurant layout and <br/><strong className="strong-purple">Choose</strong> your table </strong></p>
                    <p className="project-content-text"> Have any questions? Chat with restaurants and square away any doubts you might have about what the restaurants are doing to provide a sanitary and safe environment.</p>
                    </section>
                </section>
                <section className="feature-section">
                    <video autoPlay loop muted className='feature-video'>
                        <source src={trafficVid} type='video/mp4'/>
                    </video>
                    <section className='project-feature-content'>
                    <p className="project-feature-big-text"> <strong className="strong-purple">Check</strong> <strong className="strong-white">table traffic all the way <br/>until your reservation</strong></p>
                    <p className="project-content-text"> Keep your eyes on the table traffic. If you feel that the restaurant will be too crowded at your reservation time, feel free to cancel at any moment.</p>
                    </section>
                </section>
                <section className="feature-section">
                    <video autoPlay loop muted className='feature-video'>
                        <source src={chatVid} type='video/mp4'/>
                    </video>
                    <section className='project-feature-content'>
                    <p className="project-feature-big-text"> <strong className="strong-purple">Connect</strong> <strong className="strong-white">with restaurants <br/>about their COVID-19 guidelines</strong></p>
                    <p className="project-content-text"> Have any questions? Chat with restaurants and square away any doubts you might have about what the restaurants are doing to provide a sanitary and safe environment.</p>
                    </section>
                </section>
            </section>
            <section className='project-content'>
                <h5 className='project-content-title'>Reflection</h5>
                <p className='project-hero-text'>
                    Blalaalal <strong class='strong-purple'>blahlalaal</strong>
                </p>
                <p className='project-content-text'>
                Reflection content        
                </p>
                <Link className= 'link' to={'/'}>Back to main</Link>
            </section>
            </div>
        </div>
    </div>
    )
}


export default Resi;