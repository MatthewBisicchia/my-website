import React, { useState } from 'react';
import styles from './StartNewLab.module.css';
import StartNewLabFormTextField from  './StartNewLabFormTextField';
import SubmitButton from './SubmitButton';
import Header from './Header';

/*  TO DO: Transition this into a modal. Along with Create Issue will be a modal.
Everything else will be within the outlet within the dashboard. */

const fields = [
    {
        name: 'Name', 
        userInputValue: ''
    },
    {
        name: 'Type',
        userInputValue: ''
    },
    {
        name: 'Details',
        userInputValue: ''
    },
    {
        name: 'Toxic Chemicals',
        userInputValue: ''
    },
    {
        name: 'Steps',
        userInputValue: ''
    },
    {
        name: 'Connect Devices',
        userInputValue: ''
    },
    {
        name: 'Automate Jobs/Processes',
        userInputValue: ''
    },
]

const StartNewLab = () => {

    const [formFieldsData] = useState(fields);

    const updateFormFieldsData = (event) => {

        formFieldsData.forEach(field => {
            if(field.name === event.target.name)
            {
                field.userInputValue = event.target.value;
            }               
        })
    };

    const submit = () => {
        console.log(formFieldsData);
    }

    return(
        <React.Fragment>
            <div id={styles.startNewLab}>
                
                <Header text={"Start New Lab"} />
                
                {
                    fields.map(field => {
                        return ([
                            <StartNewLabFormTextField field={field} onchange={updateFormFieldsData} />
                        ]);
                    })
                }

                <SubmitButton submit={submit}/>

            </div>

        </React.Fragment>
    );
}

export default StartNewLab;
