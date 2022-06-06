import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/HeaderBar.module.css';
import { SocialIcon } from 'react-social-icons';
import resumePDF from '../assets/Matthew_Bisicchia_Resume.pdf';


const HeaderBar = () => {

    return(

        <>
            <header id={styles.header}>

                <div style={{color:'white'}}><a href="home" id={styles.siteName}>matthewbisicchia.com</a></div>

                <div id={styles.headerButtons}>
                    
                    <Link to="mainSite/projects" style={{textDecoration: 'none'}}>
                        <div id={styles.myProjectsButton}>
                        <a style={{padding: '3px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>Projects</a>
                        </div>
                    </Link>

                    <a href={resumePDF} style={{textDecoration: 'none'}}>
                        <div id={styles.myResumeButton}>
                        <div style={{padding: '3px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>Resume</div>
                        </div>
                    </a>

                    <SocialIcon style={{height: 40, width: 40, marginRight: '10px'}}  url="https://www.linkedin.com/in/matthew-bisicchia-72339919b/" />
                    <SocialIcon bgColor="#ffffff"style={{height: 40, width: 40}}  url="https://github.com/MatthewBisicchia" />
                </div>



            </header>

            
        </>

    );
}

export default HeaderBar;
