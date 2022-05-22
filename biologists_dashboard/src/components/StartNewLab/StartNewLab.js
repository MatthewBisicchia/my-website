import React from 'react';
import styles from './StartNewLab.module.css';


/*  TO DO: Transition this into a modal. Along with Create Issue will be a modal.
Everything else will be within the outlet within the dashboard. */

const StartNewLab = () => {

    return(
        <React.Fragment>
            <div id={styles.startNewLab}>
                
                <div style={{userSelect: 'none'}}>Start New Lab</div>
                
                <br>
                </br>

                <hr>
                </hr>


                <div className={styles.field}>
                    <div className={styles.fieldLabel}>Name:</div>
                    <div className={styles.fieldInput}><input style={{height: '25px', width: '500px'}}></input></div>
                </div>

                <div className={styles.field}>
                    {/*should be a drop down*/}
                    <div className={styles.fieldLabel}>Type:</div>
                    <div className={styles.fieldInput}><input style={{height: '25px', width: '500px'}}></input></div>
                </div>

                <div className={styles.field}>
                    <div className={styles.fieldLabel}>Details:</div>
                    <div className={styles.fieldInput}><input style={{height: '250px', width: '500px'}}></input></div>
                </div>

                <div className={styles.field}>
                    {/*should be a drop down, will generate safety concerns*/}
                    <div className={styles.fieldLabel}>Toxic Chemicals:</div>
                    <div className={styles.fieldInput}><input style={{height: '25px', width: '500px'}}></input></div>
                </div>

                <div className={styles.field}>
                {/*Perhaps create a TO DO list, with ability to add items, so that you can have an automated checklist*/}
                <div className={styles.fieldLabel}>Steps:</div>
                <div className={styles.fieldInput}><input style={{height: '25px', width: '500px'}}></input></div>
                </div>

                <div className={styles.field}>
                    <div className={styles.fieldLabel}>Connect Devices:</div>
                    <div className={styles.fieldInput}><input style={{height: '25px', width: '500px'}}></input></div>
                </div>

                <div className={styles.field}>
                    {/*should be a drop down*/}
                    <div className={styles.fieldLabel}>Automate Jobs/Processes:</div>
                    <div className={styles.fieldInput}><input style={{height: '25px', width: '500px'}}></input></div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
                    <div id={styles.startLabButton}>
                        <a style={{padding: '3px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>Start Lab</a>
                    </div>
                </div>

                <br></br>
                <br></br>


            </div>

        </React.Fragment>
    );
}

export default StartNewLab;