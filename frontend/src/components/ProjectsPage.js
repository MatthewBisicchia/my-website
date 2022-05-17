import React from 'react';
import styles from './styles/ProjectsPage.module.css';
import imageSource from '../images/myDashboard.JPG';
import resume from '../images/resume.JPG';
import myDashboardGitHub from '../images/github.JPG';
import resumePDF from '../assets/Matthew_Bisicchia_Resume.pdf';
import { SocialIcon } from 'react-social-icons';

const ProjectsPage = () => {

    const bioLabLink = `http://matthewbisicchia.com/biolab/dashboard/welcome`;
    const myDashboardLink = `http://mydashboard.matthewbisicchia.com/`;

    let state = {
        descriptionDisplay: 'none',
        imageDisplay: 'block'
    };

    let handleMouseEnterOrLeave = () => {
        if(state.descriptionDisplay == "none")
        {
            state.descriptionDisplay = "block";
            state.imageDisplay = "none"
        }
        else
        {
            state.descriptionDisplay = "none";
            state.imageDisplay = "block"
        }

        console.log(state.descriptionDisplay);
        console.log(state.imageDisplay);
        
    };

    return(
        <React.Fragment>
            <div>
               

                <div id={styles.headingBlock}>
      
                    <p> <a style={{fontWeight: 'bold', fontSize: '30px'}}>Projects</a><a style={{fontStyle: 'italic', fontSize: '18px'}}> - <a style={{fontWeight: 'bold'}}>Click Box</a> to Access the Web App; <a style={{fontWeight: 'bold'}}>Link to GitHub</a> for project is to the right of app link</a></p>
        
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
             
                  
            
                <div id={styles.menuSection}>

                    <div id={styles.items}>

                        <a className={styles.link} href={bioLabLink}> 
                            <div className={styles.parent}>
                                <div className={styles.item}>

                                    <div className={styles.itemTitle}>BioLab</div>

                                    <div className={styles.itemDescription}><p>BioLab is a system to help biologists manage laboratory experiments and exercises. This is a separate react app hosted on the same Express server as this site.</p></div>
                                    
                                </div>

                                <div className={styles.gitHubLink}>
                                    <SocialIcon bgColor="#000000" style={{height: 40, width: 40}}  url="https://github.com/MatthewBisicchia/my-website/tree/master/biologists_dashboard" />
                                </div>
                            </div>
                        </a>

                        <br />

                        <a className={styles.link} href={myDashboardLink}> 
                            <div className={styles.parent}>
                                <div className={styles.item} id={styles.myDashboardApp} onMouseEnter={handleMouseEnterOrLeave} onMouseLeave={handleMouseEnterOrLeave}>

                                    <div className={styles.itemTitle} id={styles.myDashboardImage}>My Dashboard App</div>

                                    <div style={{ display: "none"  }} className={styles.itemDescription}><p>MyDashboard is a Java Spring Boot and Angular application. It was based on a basic programming challenge completed.</p></div>
                                    
                                    <img style={{ display: "block" }} id={styles.myDashboardImage} src={imageSource} className={styles.projectImage} />

                                </div>

                                <div className={styles.gitHubLink}>
                                    <SocialIcon bgColor="#000000" style={{height: 40, width: 40}}  url="https://github.com/MatthewBisicchia/Spring_and_Angular_WebApp" />
                                </div>
                            </div>
                        </a>

                        <br />
                                
                        <a className={styles.link} href={resumePDF} without rel="noopener noreferrer" target="_blank">
                            <div className={styles.parent}>
                                <div className={styles.item}>
                                    <div className={styles.itemTitle}>Play Pumpkin Patch</div>

                                    <div className={styles.itemDescription}><p>Pumpkin Patch is a nickname I gave to the 2D Video Game Template I put together in May of 2020. </p></div>
                                
                                </div>

                                <div className={styles.gitHubLink}>
                                    <SocialIcon bgColor="#000000" style={{height: 40, width: 40}}  url="https://github.com/MatthewBisicchia/TwoDVideoGameTemplate" />
                                </div>
                            </div>
                        </a>

                        <br />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProjectsPage;