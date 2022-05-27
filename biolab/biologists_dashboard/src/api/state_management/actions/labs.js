import * as api from '../../index'

export const getLabs = () => (dispatch) => {
    try 
    {
        api.getLabs().then((response) => { 
            dispatch({ type: 'GET_ALL', payload: response.data });
        });
    }
    catch(error) 
    {
        console.log(error.message);
    }
}

export const createLab = (newLab) => async (dispatch) => {
    try 
    {
        api.createLab(newLab).then((response) => { 
            console.log("actions/labs - response received from backend:");
            console.log(response.data);
            dispatch({ type: 'CREATE', payload: response.data });
        });
    }
    catch(error) 
    {
        console.log(error.message);
    }
}
