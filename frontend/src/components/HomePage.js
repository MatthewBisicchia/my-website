import React from 'react';
import styles from './styles/HomePage.module.css';
import matthew from '../images/Matthew.png';
import imageSource from '../images/myDashboard.JPG';
import resume from '../images/resume.JPG';
import myDashboardGitHub from '../images/github.JPG';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import resumePDF from '../assets/Matthew_Bisicchia_Resume.pdf';

const HomePage = () => {

    const gitHubLink = `https://github.com/MatthewBisicchia/Spring_and_Angular_WebApp`;
    const myDashboardLink = `https://mydashboard.matthewbisicchia.com/`;
   
    return(
        <React.Fragment>
            <div>
                <div id={styles.topSection}>
                    <div id={styles.nameAndProfession}>
                        <div style={{whiteSpace: 'preWrap'}}>
                            <div style={{fontSize: '30px', fontWeight: 500}}>Matthew Joseph Bisicchia</div>
                        &#10;</div>
                    </div>

                    <div id={styles.profilePicture}>
                        <img src={matthew} id={styles.profilePicture} />
                    </div>

                    <div id={styles.scrollDown}>
                        Scroll Down to Learn More
                    </div>
                </div>

                <div id={styles.middleSection}>

                    <div className={styles.interests}>Programmer & Electronics Enthusiast</div>
                    <div id={styles.ethic}> Team Player & Self Driven</div>

                </div>


                <div className={styles.commentarySection}>

                    <h1>Thank you for stopping by.</h1>
    
                    <br />

                    <div>I love building things. Programming is my favorite pastime. I also enjoy learning concepts in electronics and signal processing.
                    I graduated this May from Rowan University in Glassboro, NJ, with a major in Electrical and Computer Engineering and a minor in Computer Science. 
                    </div>

                    <br />

                    <div>
                    Feel free to contact me by phone or email (info at bottom of this page). If you would like to talk about careers, or if you have software/hardware/electrical engineering interests/questions and want to chat, do not hesitate. Additionally, my LinkedIn can be accessed in the top right corner. I look forward to hearing from you!
                    </div>

                    <br />
                    <br />

                    <div>
                    
                        <a style={{fontSize: '20px', fontWeight: 'bold', margin: '3px'}}>At the top right in the header of this page, you can find:</a>
                    
                        
                        <div style={{marginTop: '20px', marginLeft: '20px'}}>
                            <li>some projects at the "Projects" button</li>

                            <li>my resume at the "Resume" button</li>

                            <li>link to my LinkedIn</li>

                            <li>link to my GitHub</li>
                        </div>

                    </div>

                </div>
            

                <div id={styles.menuSection}>

                    {/*<div>
                    <a style={{fontStyle: 'italic'}}>My Dashboard</a> is an app I built using Spring Boot/Hibernate and Angular (access by clicking on the "My Dashboard" App below). It is running on AWS and connected to a MySQL database.
                    </div>*/}
                     
                    {/*<div>Below you can also find the GitHub for the <a style={{fontStyle: 'italic'}}>My Dashboard</a> app, and a link to my Resume.
                      </div>*/}

                    {/*<div id={styles.items}>
                               
                        <a className={styles.link} href={resumePDF} without rel="noopener noreferrer" target="_blank">
                            <div className={styles.item}>
                                <div className={styles.itemTitle}>Resume</div>

                                <img src={resume} id={styles.myResumeImage} />
                            </div>
                        </a>
   
                    </div>*/}

                    <div><a style={{fontWeight: 'bold'}}>Email:</a> matthewbisicchia@gmail.com
                    </div>
                    <br></br>
                    <div><a style={{fontWeight: 'bold'}}>Mobile Phone:</a> 856-834-0096
                    </div>
                    <br></br>
                    
                    <div>
                        <div> <a style={{fontWeight: 'bold'}}>Site Facts:</a> Express Backend, React Frontend, Deployed with AWS</div>
                        <br></br>
                        <a style={{fontSize: '15px', fontStyle: 'italic'}}>Except for MyDashBoard app, which has a Spring Boot Backend, Angular Frontend, also Deployed with AWS</a>   
                    </div>

                    <br></br>
                    
                    <div>
                        <div style={{fontWeight: 'bold'}}>Photography courtesy of <a href="https://www.linkedin.com/in/michael-bisicchia-cpa-88aa9787/"><br></br>Michael Bisicchia</a></div>                    
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomePage;