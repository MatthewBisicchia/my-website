import React from 'react';
import styles from './styles/WelcomeScreen.module.css';

const WelcomeScreen = () => {

    return(
        <React.Fragment>
            <div id={styles.welcomeScreen}>
                
                <div style={{fontStyle: 'italic', userSelect: 'none'}}> Organize, Execute, Track, and Report. </div>
                
                <br>
                </br>

                <hr>
                </hr>

                <div id={styles.getStartedButton}>
                    Get Started
                </div>

            </div>
        </React.Fragment>
    );
}

export default WelcomeScreen;