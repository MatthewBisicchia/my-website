import React from 'react';
import styles from './styles/SideBar.module.css';
import SideBarOption from './SideBarOption';

const SideBar = () => {


    const options = [
        {
            optionName: 'Start New Lab', 
            route: 'startNewLab'
        },
        {
            optionName: 'Open Labs', 
            route: 'openLabs'
        },
        {
            optionName: 'Closed Labs', 
            route: 'closedLabs'
        },
        {
            optionName: 'Create Issue', 
            route: 'createIssue'
        }, 
        {
            optionName: 'Open Issues', 
            route: 'openIssues'
        },
        {
            optionName: 'History', 
            route: 'history'
        },
        {
            optionName: 'Reports', 
            route: 'reports'
        },
        {
            optionName: 'Findings', 
            route: 'findings'
        },
        {
            optionName: 'Archives', 
            route: 'archives'
        }
    ]

    return(
        <React.Fragment>               
             
                <div id={styles.sideBar}>
                    <ul>
                        {
                            options.map(option => {

                                let index = options.indexOf(option);

                                if(index !== 0 && index % 3 === 0)
                                {
                                    return ([
                                        <div className={styles.line}></div>,
                                        <SideBarOption option={option} />
                                    ]);
                                }
                                else 
                                {
                                    return <SideBarOption option={option} />;
                                }
                            })
                        }
                    </ul>

                </div>
            
        </React.Fragment>
    );
}

export default SideBar;