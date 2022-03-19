import React from 'react';
import styles from './styles/HomePage.module.css';
import matthew from '../images/Matthew.png';

const HomePage = () => {

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

                <div class={styles.interests}>Programmer & Electronics Enthusiast.</div>
                <div class={styles.interests}>Fascinated with Biology.</div>
                <div id={styles.ethic}> Team Player & Self Driven. </div>

                 </div>
            </div>
        </React.Fragment>
        );
}

export default HomePage;