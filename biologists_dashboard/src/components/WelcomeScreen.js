import React from 'react';
import styles from './styles/WelcomeScreen.module.css';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {

    return(
        <React.Fragment>
            <div id={styles.welcomeScreen}>
                
                <div style={{fontStyle: 'italic', userSelect: 'none'}}> Organize, Execute, Track, and Report. </div>
                
                <br>
                </br>

                <hr>
                </hr>

                <br>
                </br>

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