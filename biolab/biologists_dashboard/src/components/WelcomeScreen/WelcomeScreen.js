import React from 'react';
import styles from './WelcomeScreen.module.css';
import { Link } from 'react-router-dom';
import Header from '../StartNewLab/Header';

const WelcomeScreen = () => {

    return(
        <React.Fragment>
            <div id={styles.welcomeScreen}>
                
                <Header text={"Organize, Execute, Track, and Report."} />
                    
                 <div id={styles.getStartedButtonContainer}>
                    <Link to="/biolab/dashboard/startNewLab" style={{color: 'black',textDecoration: 'none'}}>
                    
                        <div id={styles.getStartedButton}>
                            Get Started
                        </div>
                    
                    </Link>
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default WelcomeScreen;