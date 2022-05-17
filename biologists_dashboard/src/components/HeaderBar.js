import React from 'react';
import styles from './styles/HeaderBar.module.css';
import { Link } from 'react-router-dom';

const HeaderBar = () => {

    return(

        <React.Fragment>
            <header id={styles.header}>

                <div id={styles.logo}><Link to="biolab/dashboard/welcome" style={{color: 'black',textDecoration: 'none'}}><p>Bio<a style={{color: 'rgb(53, 53, 226)'}}>Lab</a></p></Link></div>  

            </header>      
        </React.Fragment>
    );
}

export default HeaderBar;
