import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './StartNewLab.module.css';
import StartNewLabFormTextField from  './StartNewLabFormTextField';
import SubmitButton from './SubmitButton';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { createLab } from '../../api/state_management/actions/labs';


/*  TO DO: Transition this into a modal. Along with Create Issue will be a modal.
Everything else will be within the outlet within the dashboard. */

const fields = [
    {
        name: 'Name', 
        userInputValue: ''
    },
    {
        name: 'Details',
        userInputValue: ''
    },
    {
        name: 'Type',
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

const StartNewLab = ({ history }) => {

    const [formFieldsData] = useState(fields);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const updateFormFieldsData = (event) => {

        formFieldsData.forEach(field => {
            if(field.name === event.target.name)
            {
                field.userInputValue = event.target.value;
            }               
        })
    };

    const submit = () => {

        let newLab = {
            name: formFieldsData[0].userInputValue,
            details: formFieldsData[1].userInputValue,
            type: formFieldsData[2].userInputValue,
            toxic_chemicals: formFieldsData[3].userInputValue,
            steps: formFieldsData[4].userInputValue,
            connectedDevices: formFieldsData[5].userInputValue,
            automateJobsProcesses: formFieldsData[6].userInputValue
        }

        console.log("New Lab as formed in Submit Event:");
        console.log(newLab);

        dispatch(createLab(newLab));

        navigate('/biolab/dashboard/openLabs');
       
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
