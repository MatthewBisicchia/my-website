import React from 'react';
import styles from './styles/HomePage.module.css';
import matthew from '../images/Matthew.png';
import imageSource from '../images/myDashboard.JPG';
import resume from '../images/resume.JPG';
import myDashboardGitHub from '../images/github.JPG';
import resumePDF from '../assets/Matthew_Bisicchia_Resume.pdf';

const HomePage = () => {

    const gitHubLink = `https://github.com/MatthewBisicchia/Spring_and_Angular_WebApp`;
    const myDashboardLink = `http://mydashboard.matthewbisicchia.com/`;
   
    return(
        <React.Fragment>
            <div>
                <div id={styles.topSection}>
                    <div className={styles.containerForBlurEffect}>

                        <div id={styles.nameAndProfession}>
                            <div style={{whiteSpace: 'preWrap'}}>
                                <div style={{fontSize: '40px', fontWeight: 500}}>Matthew Bisicchia</div>
                            &#10;- Junior Engineer -</div>
                        </div>

                        <div id={styles.profilePicture}>
                            <img src={matthew} id={styles.profilePicture} />
                        </div>

                        <div id={styles.scrollDown}>
                            Scroll down to Learn More
                        </div>
                    </div>
                </div>

                <div id={styles.middleSection}>

                    <div class={styles.interests}>Programmer & Electronics Enthusiast</div>
                    <div class={styles.interests}>Fascinated with Biology</div>
                    <div id={styles.ethic}> Team Player & Self Driven</div>

                </div>


                <div className={styles.commentarySection}>

                    <h1>Thank you for stopping by.</h1>
    
                    <br />

                    <div>I love building things. Programming is my favorite pastime. I also enjoy learning concepts in hardware and signal processing.
                    I am graduating this May from Rowan University in Glassboro, NJ, studying Electrical and Computer Engineering. If you would like to connect, follow me on LinkedIn (link in top right corner), or reach
                    out to me at matthewbisicchia@gmail.com. I look forward to hearing from you!
                    </div>

                    <br />
                    <br />

                    <div>This site is built as an Express application running on Amazon Web Services, serving a React frontend. Feel free to check out the resources below.
                    </div>

                    <br />
                    <br />

                    <div>Photography courtesy of Michael Bisicchia.
                    </div>
                </div>
            

                <div id={styles.menuSection}>

                    <div>
                    <a style={{fontStyle: 'italic'}}>My Dashboard</a> is an app I built using Spring Boot/Hibernate and Angular (access by clicking on the "My Dashboard" App below). It is running on AWS and connected to a MySQL database.
                    </div>
                    
                    <br />
                    <br />

                    <div>Below you can also find the GitHub for the <a style={{fontStyle: 'italic'}}>My Dashboard</a> app, and a link to my Resume.
                    </div>

                    <br />
                    <br />


                    <div id={styles.items}>

                        <a className={styles.link} href={gitHubLink}> 
                            <div className={styles.item}>

                                <div className={styles.itemTitle}>GitHub for the Dashboard App</div>

                                <img src={myDashboardGitHub} id={styles.myDashboardGitHubImage} />
                            </div>
                        </a>

                        <a className={styles.link} href={myDashboardLink}> 
                            <div className={styles.item} id={styles.myDashboardApp} >
                                <div className={styles.itemTitle} id={styles.myDashboardImage}>My Dashboard App</div>

                                <img src={imageSource} id={styles.myDashboardImage} />
                                
                            </div>
                        </a>
                                
                        <a className={styles.link} href={resumePDF} without rel="noopener noreferrer" target="_blank">
                            <div className={styles.item}>
                                <div className={styles.itemTitle}>Resume</div>

                                <img src={resume} id={styles.myResumeImage} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
}

export default HomePage;