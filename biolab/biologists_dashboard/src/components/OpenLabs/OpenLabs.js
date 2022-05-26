import React from 'react';
import { useSelector } from 'react-redux';
import styles from './OpenLabs.module.css';
import Header from '../StartNewLab/Header';
import Lab from './Lab.js';

const OpenLabs = () => {

    const labs = useSelector(state => state.labs);

    return(
        <React.Fragment>
            <div id={styles.openLabs}>
                
                <Header text={"Open Labs"} />

                <div id={styles.itemsContainer}>
                    <div id={styles.items}>
                        { 
                            labs.map(lab => {
                                console.log(lab);
                                
                                return ([
                                    <Lab lab={lab} />
                                ]);
                            })
                        }
                    </div> 
                </div>
            </div>
        </React.Fragment>
    );
}

export default OpenLabs;
