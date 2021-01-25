import React from 'react'
import styles from'./deephire.module.css';
import research1 from '../assets/Deep-research3.png'
import research2 from '../assets/Deep-research2.png'
import research3 from '../assets/Deep-research1.png'
import reserveVid from '../assets/DeephireRun.mp4'
import { HashLink } from 'react-router-hash-link';
import deephireHero from '../assets/Deephire-hero.jpg'
import breakImage from '../assets/MoneyShotDeep.png'
import breakImage2 from '../assets/Deephire-break.png'
import SpringModal from '../components/modal/modal'
import cheatSheet from '../assets/cheatSheetInstruction.png'
import videoInstruction from '../assets/videoInstruction.png'

function Deephire() {

    return (
    <div>
        <div className={styles.heroImage}>
            <img src={deephireHero} className={styles.backgroundImage} alt='hero-image1'></img>
            <div className={styles.heroImageTextContainer}>
            <h5 className={styles.heroImageTextSmall}>New Product Feature Design</h5>
            <h4 className={styles.heroImageTextBig}> Designing an onboarding experience for a one-way interview startup</h4>
            </div>
        </div>

        <div className={styles.entireWrapper}>
        <div className={[styles.introWrapper, styles.marginWrapper].join(' ')}>
            <section className={styles.projectTitle}>
                <h3 className={styles.titleName}>Deephire</h3>
                <p className={styles.titleDescription}>Designing an onboarding experience for a one-way interview startup</p>
                <h4 className={styles.projectProblemStatement}> How can we improve on  <strong class={styles.strongPurple}>the drop-off rate of the one-way interview process?</strong> </h4>
                <p className={[styles.projectContentText, styles.regularText].join(' ')}>
                I volunteered for Deephire, a start-up providing a platform for one-way video interviewing, empowering candidates to show off their personality all while helping employers make the best hiring decisions.
                I worked with the co-founders to initially explore the problem space of drop-off rate. 
                After research, I pivoted our focus to improving turnaround time and video quality instead and designed an onboarding experience as a solution.
                </p>
            </section>
            <SpringModal source= {reserveVid} color= {'black'}></SpringModal>
            <section className={styles.projectRole}>
                <p className={styles.projectRoleTitle}><strong class={styles.strongWhite}>Role</strong>
                <br></br>
                UX Designer, Researcher
                </p>
                <p className={styles.projectRoleTitle}>
                <strong class={styles.strongWhite}>Team</strong>
                <br></br>
                Russell Ratcliffe, Steven Gates
                </p>
                <p className={styles.projectRoleTitle}>
                <strong class={styles.strongWhite}>Timeline</strong>
                <br></br>
                8 Weeks
                </p>
            </section>
        </div>
            <img src={breakImage} className={[styles.responsiveImage, styles.semiHeroImage].join(' ')} alt='break-image1'></img>
        <div className={[styles.contentWrapper, styles.marginWrapper].join(' ')}>
            <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Research & Key Insights</h5>
                <p className={styles.projectHeroText}>
                    "Being as nervous as I was, <strong class={styles.strongPurple}>I wasn't sure what all the rules were"</strong> - Jake
                </p>
                <p className={styles.projectContentText}>
                • Main reason past candidates did not complete the interview was loss of interest in the role.
                <br/>
                • Many candidates were not sure about the exact rules of the one-way video interview, which resulted in poor videos, drop-offs, or significant delays. (Poor videos required second iterations)     
                <br/>
                • Recruiters wanted faster turnaround time for candidiates to finish recording their interviews.   
                </p>
                <div className={styles.setImageContainer}>
                <img src={research1} className={styles.responsiveSetImage} alt='research-image1'></img>
                <img src={research2} className={styles.responsiveSetImage} alt='research-image2'></img>
                <img src={research3} className={styles.responsiveImage} alt='research-image3'></img>
                </div>

               {/*  <div className='money-shot-container'>
                    <img className='money-shot' src={moneyShot}/>
                </div> */}
            </section>
            <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Framing the Problem</h5>
                <p className={styles.projectHeroText}>
                    How might we <strong class={styles.strongPurple}>help candidates record quality videos faster?</strong>
                </p>
                <p className={styles.projectContentText}>
                While I initially set off to explore the problem space of drop-off rates, what I discovered in the research process was that the problem that needed to be solved for is increasing the quality and turnaround time for candidate interview recording. 
                With candidates dropping off during the process due to things like loss of interest, there weren't a lot we could do. 
                I pivoted to a more tangible problem that represented the needs of all our stakeholders (Recruiters and candidates).</p>
            </section>
        </div>
        <img src={breakImage2} className={[styles.responsiveImage, styles.semiHeroImage].join(' ')} alt='break-image2'></img>
        <div className={[styles.contentWrapper, styles.marginWrapper].join(' ')}>
        <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Ideation</h5>
                <p className={styles.projectHeroText}>
                We hypothesized that an <strong class={styles.strongPurple}>onboarding feature for interviewing candidiates</strong> can help them produce better recordings faster.
                </p>
                <p className={styles.projectContentText}>
                Our research showed that the most common reason that candidates ended up with a poor quality video or a delay in finishing the interview process was due to not knowing the rules around our one-way interview. When I dug deeper, I found that there was a gap in our onboarding strategy. So much was left upto the recruiters to explain to candidates how the platform works. We thought that we need to provide an authoritative source of truth for onboarding.
                <br/>
                <br/>
                I ideated two different styles of onboarding: <strong>infograph</strong> and <strong>instructional video</strong>.
                </p>
            </section>
            <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Experimentation</h5>
                <p className={styles.projectHeroText}>
                <strong className={styles.strongPurple}> A/B testing</strong> with low-fi coded-prototype
                </p>
                <p className={[styles.projectContentText,styles.marginMedium].join(' ')}>
                    <strong>Methods</strong>
                </p>
                <div className={styles.projectContentText}>I conducted an experiment with 30 people at local coffee shops:
                    <p className={[styles.projectContentText,styles.indent].join(' ')}>1. I had 10 people go through the current flow, 10 with option A and 10 with option B.  
                    <br/>
                    2. After each run, I gave the participant the same test around interview rules.
                    <br/>
                    </p>
                </div>
                <p className={[styles.projectContentText,styles.marginMedium].join(' ')}>
                    <strong>Option A: Built-in mandatory instructional video</strong>
                    {/* <br/>
                    <a className={styles.projectContentText} style={{color:'#858585', textDecoration:'underline'}} href="https://optimistic-ramanujan-7d6e27.netlify.app/"> link to prototype</a>
                 */}</p>
                <div className={styles.featureSection}>
                    <div className={styles.iframeContainer}>
{/*                         <iframe className={styles.iframeResponsive} src="https://optimistic-ramanujan-7d6e27.netlify.app/" frameborder="" title='1' />
 */}                    
                        <img src={videoInstruction} className={styles.iframeResponsive} alt='option-image1'></img>
                        <a  className={styles.codeLink} href='https://optimistic-ramanujan-7d6e27.netlify.app/'>Link to coded prototype</a>
                    </div>
                    <div >
                        <span className={styles.projectContentText}> This option uses instructional videos to onboard candidates.</span>
                        <p><strong className={styles.projectContentText}>Pros</strong></p>
                        <span className={styles.projectContentText}> 
                        • Clear delivery of all the information.
                        <br/>
                        • Simple and familiar interaction.
                        </span>
                        <p><strong className={styles.projectContentText}>Cons</strong></p>
                        <span className={styles.projectContentText}> 
                        • Video elongates to the process and returning users will have to watch the video again.
                        <br/>
                        • Users could forget about the content.
                        </span>
                    </div>
                </div>
                <p className={[styles.projectContentText,styles.marginMedium].join(' ')}>
                <strong>Option B: Cheat-sheet style infographics</strong>
                {/* <br/>
                <a className={styles.projectContentText} style={{color:'#858585', textDecoration:'underline'}} href="https://wizardly-noether-143579.netlify.app/"> link to prototype</a>
                 */}</p>
                <div className={styles.featureSection}>
                    <div className={styles.iframeContainer}>
{/*                         <iframe className={styles.iframeResponsive} src="https://wizardly-noether-143579.netlify.app/" frameborder="" title='2'/>
 */}                    
                         <img src={cheatSheet} className={styles.iframeResponsive} alt='option-image2'></img>
                        <a className={styles.codeLink} href='https://wizardly-noether-143579.netlify.app/'>Link to coded prototype</a>
                    </div>
                    <div >
                        <span className={styles.projectContentText}> This option uses a cheat-sheet style infograph to onboard customers.</span>
                        <p><strong className={styles.projectContentText}>Pros</strong></p>
                        <span className={styles.projectContentText}> 
                        • Could be quicker than going through a video.
                        <br/>
                        • Simple and familiar interaction.
                        </span>
                        <p><strong className={styles.projectContentText}>Cons</strong></p>
                        <span className={styles.projectContentText}> 
                        • Not possible to force users read it throughly.
                        <br/>
                        • There is a lot of text to cover and users often don’t have the patience or the attention span.
                        </span>
                    </div>
                </div>
                <p className={[styles.projectContentText].join(' ')}>
                <strong>Results</strong>
                </p>
                <p className={[styles.projectContentText].join(' ')}>
                Option A had better results than option B and the current flow by a noticeable margin. 
                </p>
            </section>
            </div>
            <div className={styles.backgroundChange}>
            <div className={[styles.contentWrapper, styles.marginWrapper].join(' ')}>

            <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Final Design </h5>
                <p className={styles.projectHeroText} style={{marginBottom: '10px' }}>
                    Deephire Onboarding Feature
                </p>
                <p className={styles.projectContentText} style={{marginBottom: '80px' , marginTop: '0px'}}>
                This solution helps candidates understand clearly and efficiently what the rules of our interview platform is. This will allow candidates to be able to finish their interviews faster, with better quality, and without needing manual support.
                </p>
                <section className={styles.featureSection}>
                    <video autoPlay loop muted className={styles.featureVideo}>
                        <source src={reserveVid} type='video/mp4'/>
                    </video>
                    <section className={styles.projectFeatureContent}>
                    <p className={styles.projectContentBigText}> <strong className={styles.strongPurple}>Understand</strong> <strong className={styles.strongWhite}> the exact rules and usages before you begin. </strong></p>
                    <p className={styles.projectContentText}> Recruiters and candidiates shouldn't have to worry about anything. Come on our platform and we will onboard you with exactly what you need.</p>
                    </section>
                </section>
            </section>
            <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Reflection</h5>
                <p className={styles.projectHeroText}>
                    Next <strong class={styles.strongPurple}>Steps</strong>
                </p>
                <p className={styles.projectContentText}>
                • I rolled off the team before the feature was deployed to production. I would've released the feature in an A/B style to make sure we had better quality/faster turnaround with the new feature. 
                <br/>       
                • Explore ways to reduce the length of the videos and continuously experiment with video content.
                <br/>
                • Explore ways in which users who forget about the instruction during the interview can be reminded.
                </p>
                <p className={styles.projectHeroText}>
                    Lessons <strong class={styles.strongPurple}>Learned</strong>
                </p>
                <p className={styles.projectContentText}>
                • Coded prototypes can speed up transition from design to deployment and help get buy-in from stakeholders. 
                <br/>
                • Sometimes the intial problem space can take you to an underlying adjacent problem that needs to be addressed first.
                </p>
            </section>
            <HashLink className= {styles.link} to={'/#work'}>View other work</HashLink>
            </div>
            </div>
        </div>
    </div>
    )
}


export default Deephire;