import axios from 'axios';

const url_getAllLabs = 'http://matthewbisicchia.com/biolab_api/labs/getAllLabs';
const url_postLab = 'http://matthewbisicchia.com/biolab_api/labs/createNewLab';

export const getLabs = () => axios.get(url_getAllLabs);

export const createLab = (createdLab) => axios.post(url_postLab, createdLab);