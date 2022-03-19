import React from 'react';
import styles from './styles/HeaderBar.module.css';
import { SocialIcon } from 'react-social-icons';


const HeaderBar = () => {

    return(

        <>
            <header id={styles.header}>

                matthewbisicchia.com

                <SocialIcon  style={{position: 'absolute', zIndex: 6, right: '10px', top: '10px', height: 30, width: 30}} url="https://www.linkedin.com/in/matthew-bisicchia-72339919b/" />

            </header>

            
        </>

    );
}

export default HeaderBar;
