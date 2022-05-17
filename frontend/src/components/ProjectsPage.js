import React from 'react';
import styles from './styles/ProjectsPage.module.css';
import imageSource from '../images/myDashboard.JPG';
import resume from '../images/resume.JPG';
import myDashboardGitHub from '../images/github.JPG';
import resumePDF from '../assets/Matthew_Bisicchia_Resume.pdf';
import { SocialIcon } from 'react-social-icons';

const ProjectsPage = () => {

    const gitHubLink = `https://github.com/MatthewBisicchia/Spring_and_Angular_WebApp`;
    const myDashboardLink = `http://mydashboard.matthewbisicchia.com/`;
   
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

                        <a className={styles.link} href={gitHubLink}> 
                            <div className={styles.parent}>
                                <div className={styles.item}>

                                    <div className={styles.itemTitle}>BioLab</div>

                                    <div className={styles.itemDescription}> BioLab is a system to help biologists manage laboratory experiments and exercises. The GitHub for this project is actually the GitHub for this website, as it is a separate react app hosted on the same Express server as this site (for now).</div>
                                    
                                </div>

                                <div className={styles.gitHubLink}>
                                    <SocialIcon bgColor="#000000" style={{height: 40, width: 40}}  url="https://github.com/MatthewBisicchia" />
                                </div>
                            </div>
                        </a>

                        <br />

                        <a className={styles.link} href={myDashboardLink}> 
                            <div className={styles.parent}>
                                <div className={styles.item} id={styles.myDashboardApp} >
                                    <div className={styles.itemTitle} id={styles.myDashboardImage}>My Dashboard App</div>

                                    <img src={imageSource} id={styles.myDashboardImage} />
                                    
                                </div>

                                <div className={styles.gitHubLink}>
                                    <SocialIcon bgColor="#000000" style={{height: 40, width: 40}}  url="https://github.com/MatthewBisicchia" />
                                </div>
                            </div>
                        </a>

                        <br />
                                
                        <a className={styles.link} href={resumePDF} without rel="noopener noreferrer" target="_blank">
                            <div className={styles.parent}>
                                <div className={styles.item}>
                                    <div className={styles.itemTitle}>Play Pumpkin Patch</div>

                                    <img src={resume} id={styles.myResumeImage} />
                                </div>

                                <div className={styles.gitHubLink}>
                                    <SocialIcon bgColor="#000000" style={{height: 40, width: 40}}  url="https://github.com/MatthewBisicchia" />
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