import React from 'react';
import styles from './styles/SideBar.module.css';

const SideBar = () => {

    return(
        <React.Fragment>               
             
                <div id={styles.sideBar}>
                    <ul>
                        <li>Start New Lab</li>
                        <li>Open Labs</li>
                        <li>Closed Labs</li>
                    </ul>

                    <div style={{padding: '20px'}}> <hr></hr> </div>

                    <ul>
                        <li>Create Issue</li>
                        <li>Open Issues</li>
                        <li>History</li>
                    </ul>

                    <div style={{padding: '20px'}}> <hr></hr> </div>

                    <ul>
                        <li>Reports</li>
                        <li>Findings</li>
                        <li>Archive</li>
                    </ul>
                </div>
            
        </React.Fragment>
    );
}

export default SideBar;