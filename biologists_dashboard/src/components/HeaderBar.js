import React from 'react';
import styles from './styles/HeaderBar.module.css';
import { SocialIcon } from 'react-social-icons';


const HeaderBar = () => {

    return(

        <React.Fragment>
            <header id={styles.header}>

                <div id={styles.logo}><p>Bio<a style={{color: 'rgb(53, 53, 226)'}}>Lab</a></p></div>

            </header>      
        </React.Fragment>
    );
}

export default HeaderBar;
