import React from 'react';
import styles from './StartNewLab.module.css';
import StartNewLabFormTextField from  './StartNewLabFormTextField';


/*  TO DO: Transition this into a modal. Along with Create Issue will be a modal.
Everything else will be within the outlet within the dashboard. */

const fields = [
    {
        label: 'Name', 
    },
    {
        label: 'Type', 
    },
    {
        label: 'Details', 
    },
    {
        label: 'Toxic Chemicals', 
    },
    {
        label: 'Steps', 
    },
    {
        label: 'Connect Devices', 
    },
    {
        label: 'Automate Jobs/Processes', 
    },

]

const StartNewLab = () => {

    return(
        <React.Fragment>
            <div id={styles.startNewLab}>
                
                <div style={{userSelect: 'none'}}>Start New Lab</div>
                
                <br>
                </br>

                <hr>
                </hr>

                {
                    fields.map(field => {
                        return ([
                            <StartNewLabFormTextField field={field} />
                        ]);
                    })
                }

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