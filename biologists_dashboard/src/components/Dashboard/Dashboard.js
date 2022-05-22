import React from 'react';
import styles from './Dashboard.module.css';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';


const Dashboard = () => {

    return(
        <React.Fragment>
            <div id={styles.dashboard}>          
                <SideBar /> 
                <div id={styles.container}>                
                    <Outlet/>      
                </div>      
            </div>          
        </React.Fragment>
    );
}

export default Dashboard;