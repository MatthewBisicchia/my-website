import React from 'react';
import styles from './HeaderBar.module.css';
import { Link } from 'react-router-dom';

const HeaderBar = () => {

    return(

        <React.Fragment>
            <header id={styles.header}>

                <div id={styles.logo}>
                    <Link to="biolab/dashboard/welcome" id={styles.link}>
                        <a style={{color: 'black'}}>Bio<a style={{color: 'rgb(53, 53, 226)'}}>Lab</a></a>
                    </Link>
                </div>  

            </header>      
        </React.Fragment>
    );
}

export default HeaderBar;
