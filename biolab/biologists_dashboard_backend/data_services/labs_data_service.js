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
        const { name, details, type, toxic_chemicals, steps, connectedDevices, automateJobsProcesses } = request.body;

        let newLab = {
            name: name,
            details: details,
            type: type,
            toxic_chemicals: toxic_chemicals,
            steps: steps,
            connectedDevices: connectedDevices,
            automateJobsProcesses: automateJobsProcesses
        }

        console.log("newLab as formed in backend:")
        console.log(newLab);


        await database.query(`INSERT INTO labs SET ?`, newLab, (error, data) => {
            if(error) 
            {
                throw error;
            }
            else 
            {
                response.json(newLab);
            }
        });
    }
    catch(error)
    {
        response.sendStatus(500);
        console.log(error);
    }

}
