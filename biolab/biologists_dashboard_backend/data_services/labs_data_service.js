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
                response.status(200).json(data);
            }
        });
    }
    catch(error)
    {
        response.sendStatus(404);
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
                response.status(201).json(newLab);
            }
        });
    }
    catch(error)
    {
        response.sendStatus(409);
        console.log(error);
    }

}
