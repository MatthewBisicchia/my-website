import React from 'react';
import styles from './styles/SideBar.module.css';
import { Link } from 'react-router-dom';

const SideBar = () => {

    return(
        <React.Fragment>               
             
                <div id={styles.sideBar}>
                    <ul>
                        <Link to="startNewLab" style={{color: 'black',textDecoration: 'none'}}><li>Start New Lab</li></Link>
                        <Link to="openLabs" style={{color: 'black',textDecoration: 'none'}}><li>Open Labs</li></Link>
                        <Link to="closedLabs" style={{color: 'black',textDecoration: 'none'}}><li>Closed Labs</li></Link>
                    </ul>

                    <div style={{padding: '20px'}}> <hr></hr> </div>

                    <ul>
                        <Link to="createIssue" style={{color: 'black',textDecoration: 'none'}}><li>Create Issue</li></Link>
                        <Link to="openIssues" style={{color: 'black',textDecoration: 'none'}}><li>Open Issues</li></Link>
                        <Link to="history" style={{color: 'black',textDecoration: 'none'}}><li>History</li></Link>
                    </ul>

                    <div style={{padding: '20px'}}> <hr></hr> </div>

                    <ul>
                        <Link to="reports" style={{color: 'black',textDecoration: 'none'}}><li>Reports</li></Link>
                        <Link to="findings" style={{color: 'black',textDecoration: 'none'}}><li>Findings</li></Link>
                        <Link to="archives" style={{color: 'black',textDecoration: 'none'}}><li>Archives</li></Link>  
                    </ul>
                </div>
            
        </React.Fragment>
    );
}

export default SideBar;