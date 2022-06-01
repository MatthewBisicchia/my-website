import axios from 'axios';

const url_getAllLabs = 'http://matthewbisicchia.com/biolab_api/labs/getAllLabs';
const url_postLab = 'http://matthewbisicchia.com/biolab_api/labs/createNewLab';

const configuration = {
   headers: {
    'Access-Control-Allow-Origin' : 'http://matthewbisicchia.com',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH',
    }
}

export const getLabs = () => axios.get(url_getAllLabs, configuration);

export const createLab = (createdLab) => axios.post(url_postLab, createdLab, configuration);