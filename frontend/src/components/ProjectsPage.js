import React from 'react';
import styles from './styles/ProjectsPage.module.css';
import imageSource from '../images/myDashboard.JPG';
import { SocialIcon } from 'react-social-icons';

const ProjectsPage = () => {

    const bioLabLink = `https://matthewbisicchia.com/biolab/dashboard/welcome`;
    const myDashboardLink = `https://mydashboard.matthewbisicchia.com`;
    //const myDashboardLink = `https://github.com/MatthewBisicchia/Spring_and_Angular_WebApp`;
    let resumePDF = `https://github.com/MatthewBisicchia/TwoDVideoGameTemplate`;

    let state = {
        descriptionDisplay: 'none',
        imageDisplay: 'block'
    };

    let handleMouseEnterOrLeave = () => {
        if(state.descriptionDisplay === "none")
        {
            state.descriptionDisplay = "block";
            state.imageDisplay = "none"
        }
        else
        {
            state.descriptionDisplay = "none";
            state.imageDisplay = "block"
        }

        // console.log(state.descriptionDisplay);
        // console.log(state.imageDisplay);
        
    };

    return(
        <React.Fragment>
            <div>
               

                <div id={styles.headingBlock}>
      
                    <div> <a style={{whiteSpace: 'preWrap', fontWeight: 'bold', fontSize: '30px'}}>Projects</a> <p style={{fontStyle: 'italic', fontSize: '18px'}}> - <a style={{fontWeight: 'bold'}}>Click Box</a> to Access the Web App; <a style={{fontWeight: 'bold'}}>Link to GitHub</a> for project is to the right of app link</p></div>

                    <div> <div style={{fontSize: '18px'}}><a style={{fontWeight: 'bold'}}>Note: </a>BioLab and MyDashboard do not yet have Mobile Friendly UI</div> </div>

                    <div id={styles.noteToScrollDown}> <a style={{fontSize: '18px', fontWeight: 'bold'}}>You may need to scroll down to see all projects.</a> </div>
              
                </div>

               
             
                  
            
                <div id={styles.menuSection}>

                    <div id={styles.items}>

                        <a className={styles.link} href={bioLabLink}> 
                            <div className={styles.parent}>
                                <div className={styles.item}>

                                    <div className={styles.itemTitle}>BioLab</div>

                                    <div className={styles.itemDescription}><p><div style={{fontWeight: 'bold'}}>Work in progress:</div> BioLab is a system to help biologists manage laboratory experiments and exercises. It is a separate React app hosted on the same Express server for this site. Specifies a RESTful API and uses MySQL database hosted in AWS RDS.</p></div>
                                    
                                </div>

                                <div className={styles.gitHubLink}>
                                    <SocialIcon bgColor="#000000" style={{height: 40, width: 40}}  url="https://github.com/MatthewBisicchia/my-website/tree/master/biolab" />
                                </div>
                            </div>
                        </a>

                        <br />

                     

                        <a className={styles.link} href={myDashboardLink}> 
                            <div className={styles.parent}>
                                <div className={styles.item} id={styles.myDashboardApp} onMouseEnter={handleMouseEnterOrLeave} onMouseLeave={handleMouseEnterOrLeave}>

                                    <div className={styles.itemTitle}>MyDashboard</div>

                                    <div style={{ display: "block"  }} className={styles.itemDescription}><p>The purpose of the project was for experience of the deployment process, rather than its functionality. Java Spring Boot and Angular app built with Maven. Specifies a RESTful API to communicate via Hibernate with a MySQL database (AWS RDS).</p></div>
                                    
                

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
                                    <div className={styles.itemTitle}>2D Video Game Template</div>

                                    <div className={styles.itemDescription}><p>A game template for a 2D video game that I put together in May of 2020, with the exception of some minor recent changes. <a style={{fontWeight: 'bold'}}>Note:</a> a web app to see this game is not currently hosted, therefore clicking this box also directs to GitHub instead.</p></div>
                                
                                </div>

                                <div className={styles.gitHubLink}>
                                    <SocialIcon bgColor="#000000" style={{height: 40, width: 40}}  url="https://github.com/MatthewBisicchia/TwoDVideoGameTemplate" />
                                </div>
                            </div>
                        </a>

                        

                    </div>
                </div>
   
            </div>
        </React.Fragment>
    );
}

export default ProjectsPage;