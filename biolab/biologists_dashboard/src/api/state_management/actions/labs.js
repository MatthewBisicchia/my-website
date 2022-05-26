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

// export const createLab = (newLab) => async (dispatch) => {
//     try 
//     {
//         const { lab } = await api.createLab(newLab);
//         dispatch({type: 'CREATE', payload: lab});
//     }
//     catch(error) 
//     {
//         console.log(error.message);
//     }
// }
