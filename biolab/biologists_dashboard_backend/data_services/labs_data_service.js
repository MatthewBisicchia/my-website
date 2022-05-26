import database from '../database/index.js';


export const getAllLabs = async (request, response) => {

    try 
    {
        let labs = await database.query(`SELECT * FROM labs`, (error, data) => {
            if(error) 
            {
                throw error;
            }
            else 
            {
                response.json(data);
            }
        });
    }
    catch(error)
    {
        response.sendStatus(500);
        console.log(error);
    }

}

export const getLabById = async (request, response) => {

    
}

export const createNewLab = async (request, response) => {

    try 
    {
        //dummy test newLab; will replace with data from the request
        let newLab = {
            name: 'Lab1',
            type: 'Biology',
            details: 'First lab created, dummy values',
            toxic_chemicals: 'None',
            steps: 'None',
            connectedDevices: 'Test Device',
            automateJobsProcesses: 'Determine DNA Sequence'
        }


        await database.query(`INSERT INTO labs SET ?`, newLab, (error, data) => {
            if(error) 
            {
                throw error;
            }
            else 
            {
                response.json(data);
            }
        });
    }
    catch(error)
    {
        response.sendStatus(500);
        console.log(error);
    }

}
