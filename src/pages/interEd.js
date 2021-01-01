import React from 'react'
import styles from'./interEd.module.css';
import research1 from '../assets/InterEd-Research.jpg';
import videoImage from '../assets/Video.jpg';
import classImage from '../assets/Class.jpg';
import historyImage from '../assets/History.jpg'
import FeatureHome from '../assets/ClassHome.png';
import FeaturePlan from '../assets/PlanClass.png';
import FeatureReview from '../assets/ReviewClass.png';
import FeatureShare from '../assets/ShareClass.png';
import iteration1 from '../assets/iteration1-blurred.png'
import iteration2 from '../assets/iteration2-blurred.png'
import iteration3 from '../assets/iteration3-blurred.png'
import iteration4 from '../assets/iteration4-blurred.png'
import { HashLink } from 'react-router-hash-link';
import deephireHero from '../assets/classroomCover.jpg'
import breakImage from '../assets/interEd.png'
import breakImage2 from '../assets/sketch.png'
import breakImage3 from '../assets/lowfiCoverImage.jpg'
import breakScreen from '../assets/interEdScreens.png'
import SpringModal from '../components/modal/modal'
import protoVideo from '../assets/CleanRun.mp4'

function InterEd() {

    return (
    <div>
        <div className={styles.heroImage}>
            <img src={deephireHero} className={styles.backgroundImage} alt='hero-image1'></img>
            <div className={styles.heroImageTextContainer}>
            <h5 className={styles.heroImageTextSmall}>New Product Design</h5>
            <h4 className={styles.heroImageTextBig}> Designing to help k-12 classes adapt to remote learning</h4>
            </div>
        </div>

        <div className={styles.entireWrapper}>
        <div className={[styles.introWrapper, styles.marginWrapper].join(' ')}>
            <section className={styles.projectTitle}>
                <h3 className={styles.titleName}>InterEd</h3>
                <p className={styles.titleDescription}>Designing a product to improve classroom interactions in remote setting.</p>
                <h4 className={styles.projectProblemStatement}> With a new remote setting, <strong class={styles.strongPurple}>classrooms started facing  new challenges.</strong> </h4>
                <p className={[styles.projectContentText, styles.regularText].join(' ')}>
                We were drawn to the topic of remote education because of our personal connections to K-12 students and parents. 
                We learned from our research that classroom interactions have become less efficient and harder on both teachers and students mainly due to the increased cognitive load on teachers during class. Our solution looks to improve K-12 classroom interactions by reducing the cognitive load teachers have by providing a robust suite of features to aid the teaching journey before, during and after class. 
                </p>
            </section>
            <SpringModal source= {protoVideo} color= {'black'}></SpringModal>
            <section className={styles.projectRole}>
                <p className={styles.projectRoleTitle}><strong class={styles.strongWhite}>Role</strong>
                <br></br>
                UX generalist
                </p>
                <p className={styles.projectRoleTitle}>
                <strong class={styles.strongWhite}>Team</strong>
                <br></br>
                Qirui Wu, Qixin He, Kyle Helseth
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
                <img src={research1} className={styles.responsiveImage} alt='research-image1'></img>
                <p className={styles.projectHeroText}>
                “ Transitioning my lessons to remote learning has <strong class={styles.strongPurple}>significantly increased my workload.”</strong>  - 3rd Grade Teacher
                </p>
                <p className={styles.projectContentText}>
                • Teachers’ work and cognitive load increased significantly during remote lecturing due to simultaneous tasks, complexity of tools and environmental challenges.
                <br/>
                • Younger students are more distracted than ever with teachers failing to keep them on track. 
                <br/>
                • Students feel ignored due to teachers being busy with their extra tasks of remote teaching.   
                <br/>
                • Remote education did not create significant barriers in parent-teacher communications.   
                </p>
                

               {/*  <div className='money-shot-container'>
                    <img className='money-shot' src={moneyShot}/>
                </div> */}
            </section>
            <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Framing the Problem</h5>
                <p className={styles.projectHeroText}>
                    How might we improve remote K-12<strong class={styles.strongPurple}> classroom interactions </strong>between <strong class={styles.strongBlue}>teachers and students?</strong>
                </p>
                <p className={styles.projectContentText}>
               We initially thought of exploring the gap in communication between parents and teachers in remote education but our research showed that communication quality and frequency improved with remote education.
               Upon learning that the classroom interactions have dropped in quality and efficiency due to things like increased cognitive load on teachers during class, we pivoted to looking at how we might improve classroom interactions.
               </p>
            </section>
        </div>
        <img src={breakImage2} className={[styles.responsiveImage, styles.semiHeroImage].join(' ')} alt='break-image2'></img>
        <div className={[styles.contentWrapper, styles.marginWrapper].join(' ')}>
        {/* <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Design Focus</h5>
                <p className={styles.projectHeroText}>
                <strong class={styles.strongPurple}>Simplify</strong> controls and content sharing.
                <br/>
                <strong class={styles.strongPurple}>Facilitate</strong> better interaction with activities.
                <br/>
                <strong class={styles.strongPurple}>Reduce</strong> unnecessary cognitive load; spread the necessary load to pre/post class.
                </p>
                <p className={styles.projectContentText}>
                To improve classroom interactions, we focused on concepts to reduce teacher’s cognitive load allowing teachers to focus on the teaching instead of the technology. 
                <br/>
                </p>
            </section> */}
        <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Ideation</h5>
                <p className={styles.projectHeroText}>
                We hypothesized that a <strong class={styles.strongPurple}>digital education platform</strong> with the following features can help reduce cognitive load and make classes more engaging:
                </p>
                <div className={styles.setImageContainer}>
                <div>
                    <img src={classImage} className={[styles.responsiveSetImage, styles.circularImage].join(' ')} alt='research-image1'></img>
                    <p className={styles.projectContentText}>
                    System for creating lesson plans and content for class.
                    </p>
                </div>
                <div>
                    <img src={videoImage} className={[styles.responsiveSetImage, styles.circularImage].join(' ')} alt='research-image2'></img>
                    <p className={styles.projectContentText}>
                    Video communication platform built for education.
                    </p>
                </div>
                <div>
                    <img src={historyImage} className={[styles.responsiveImage, styles.circularImage].join(' ')} alt='research-image3'></img>
                    <p className={styles.projectContentText}>
                    Classroom insights for improving remote instruction.
                    </p>
                </div>
                </div>
                <p className={styles.projectContentText}>
                The main pain point we wanted to tackle was the added cognitive load to teachers due to needing to use multiple new technologies for class lessons and remote environmental issues. We felt that a digital platform centered around these three features can help solve the aforementioned problem, thereby also solving for other peripheral problems we discovered.
                
                </p>
            </section>
            </div>
            <img src={breakImage3} className={[styles.responsiveImage, styles.semiHeroImage].join(' ')} alt='break-image1'></img>
            <div className={[styles.contentWrapper, styles.marginWrapper].join(' ')}>
            <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Usability Testing and Design Iterations</h5>
                <p className={[styles.projectContentText,styles.marginMedium].join(' ')}>
                   We conducted remote usability tests with teachers and students. 
                   <br/>
                   These were the key findings:
                    <p className={[styles.projectContentText,styles.indent].join(' ')}>
                    • Teachers found the interaction for sharing content to students confusing.  
                    <br/>
                    • Some in-class student-to-teacher interaction features that students expected to have were missing.
                    <br/>
                    • The simplicity of the UI was favorably reviewed, but could be improved. 
                    </p>
                </p>
                <p className={[styles.projectContentText,styles.marginMedium].join(' ')}>
                   Based on the findings, we iterated on our design while focusing on simplifying the interface and reducing cognitive load:
                   <br/>
                </p>
                <div className={styles.iterationSection}>
                <section>
                    <img src={iteration1} className={styles.iterationImage} alt='feature-1'/>
                    <section className={styles.projectFeatureContent}>
                    <p className={styles.projectContentText}> <strong className={styles.strongWhite}>More expressive hierarchy </strong></p>
                    <p className={styles.projectContentText}> We made hierarchy more expressive in our platform. We especially paid attention to it in the class planning page by using nested-tabs rather than breadcrumbs.</p>
                    </section>
                </section>
                <section >
                    <img src={iteration2} className={styles.iterationImage} alt='feature-2'/>
                    <section className={styles.projectFeatureContent}>
                    <p className={styles.projectContentText}> <strong className={styles.strongWhite}>Better organiziation </strong></p>
                    <p className={styles.projectContentText}> We re-organized components to be more self-explanatory in function by follwing the law of common region. We put extra attention into doing so for the activity builder tool by laying out the edit features in groups.</p>
                    </section>
                </section>
                <section >
                    <img src={iteration3} className={styles.iterationImage} alt='feature-3'/>
                    <section className={styles.projectFeatureContent}>
                    <p className={styles.projectContentText}> <strong className={styles.strongWhite}>Clear visibility </strong></p>
                    <p className={styles.projectContentText}> We enhanced visibility of the important compnents. This can be seen in how we added more contrast and icons for the class activity sharing panel.</p>
                    </section>
                </section>
                <section >
                    <img src={iteration4} className={styles.iterationImage} alt='feature-4'/>
                    <section className={styles.projectFeatureContent}>
                    <p className={styles.projectContentText}> <strong className={styles.strongWhite}>Simplified interface </strong></p>
                    <p className={styles.projectContentText}> We simplified the interface all around. We especially paid attention to untangling the student interface by removing unnecessarily nested items.</p>
                    </section>
                </section>
                </div>
            </section>
            </div>
            <img src={breakScreen} className={[styles.responsiveImage, styles.semiHeroImage].join(' ')} alt='break-image1'></img>
            <div /* className={styles.backgroundChange} */>
            <div className={[styles.contentWrapper, styles.marginWrapper].join(' ')}>

            <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitleWithMargin}>Final Design </h5>
                <section className={styles.featureSection}>
                    <img src={FeatureHome} className={styles.featureVideo} alt='feature-1'/>
                    <section className={styles.projectFeatureContent}>
                    <p className={styles.projectContentBigText}> <strong className={styles.strongWhite}>Manage and navigate class schedules </strong></p>
                    <p className={styles.projectContentText}> Intuitive ways to for manage class schedules and start class lectures.</p>
                    </section>
                </section>
                <section className={styles.featureSection}>
                    <img src={FeaturePlan} className={styles.featureVideo} alt='feature-2'/>
                    <section className={styles.projectFeatureContent}>
                    <p className={styles.projectContentBigText}> <strong className={styles.strongWhite}>Customize interactive lesson plans </strong></p>
                    <p className={styles.projectContentText}> No need to use other tools to create engaging and interactive classroom activities.
                    Bring back the engaging interactive lessons to your remote classes.</p>
                    </section>
                </section>
                <section className={styles.featureSection}>
                    <img src={FeatureShare} className={styles.featureVideo} alt='feature-3'/>
                    <section className={styles.projectFeatureContent}>
                    <p className={styles.projectContentBigText}> <strong className={styles.strongWhite}>Share and monitor your lesson plans and activities </strong></p>
                    <p className={styles.projectContentText}> Lesson plans are linked to the lecture and activities are easily shareable with the classroom.</p>
                    </section>
                </section>
                <section className={styles.featureSection}>
                    <img src={FeatureReview} className={styles.featureVideo} alt='feature-4'/>
                    <section className={styles.projectFeatureContent}>
                    <p className={styles.projectContentBigText}> <strong className={styles.strongWhite}>Review events from past classes </strong></p>
                    <p className={styles.projectContentText}> Automate collection of important events from classes (polls, student questions, quizzes, ...etc) and review them to iterate on your class lectures.</p>
                    </section>
                </section>
            </section>
            <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Future Directions</h5>
                <p className={styles.projectContentText}>
                <strong className={styles.projectContentBigText}>Explore more ways to add <strong class={styles.strongPurple}>interactivity to classrooms </strong></strong>
                <br/>
                The biggest gap between the quality of remote and in-classroom lecture was the lack of interactivity.
                <br/>
                <br/>
                <strong className={styles.projectContentBigText}> Ideate ways to <strong class={styles.strongPurple}>gamify learning</strong></strong> 
                <br/>
                For younger students, these could help with attention retainment.
                <br/>
                <br/>
                <strong className={styles.projectContentBigText}>Include ways to <strong class={styles.strongPurple}>facilitate social interactions</strong></strong> 
                <br/>
                While not the biggest direct concern to education quality, teachers, students and parents were concerned about the lack of social interaction that students get with each other.
                <br/>
                </p>
                </section>
              <section className={styles.projectContent}>
                <h5 className={styles.projectContentTitle}>Reflection</h5>
                <p className={styles.projectContentText}>
                <strong className={styles.projectContentBigText}>What went well:</strong>
                <br/>
                </p>
                <p className={styles.projectContentText}>
                • In-depth interviews with different stakeholders elicited many helpful insights to land our direction and guide the product design.
                <br/>
                • Usability testing with teachers and students helped us ground our solution.
                </p>
                <p className={styles.projectContentText}>
                <strong className={styles.projectContentBigText}>Opportunities for growth:</strong>
                <br/>
                </p>
                <p className={styles.projectContentText}>
                • More quantitative data from a wider survey distribution would have been helpful.
                <br/>
                • Additional research and testing iterations to optimize the overall structure of the application.
                </p>
            </section>
            <HashLink className= 'link' to={'/#work'}>View other work</HashLink>
            </div>
            </div>
        </div>
    </div>
    )
}


export default InterEd;