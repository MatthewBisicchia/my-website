import axios from 'axios';
import React, { useEffect } from 'react';

const url_getAllLabs = 'http://www.matthewbisicchia.com/biolab_api/labs/getAllLabs';
const url_postLab = 'http://www.matthewbisicchia.com/biolab_api/labs/createNewLab';

// const url_getAllLabs = 'http://localhost:3000/biolab_api/labs/getAllLabs';
// const url_postLab = 'http://localhost:3000/biolab_api/labs/createNewLab';

// const url_main = "http://www.matthewbisicchia.com";

// const corsOptions = {
//    url_main,
//    headers: {
//     'Access-Control-Allow-Origin' : 'http://www.matthewbisicchia.com/*',
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH',
//     }
// }

// axios(corsOptions)
// .then(response => {
//     setData(response);
// }) 

export const getLabs = () => axios.get(url_getAllLabs);

export const createLab = (createdLab) => axios.post(url_postLab, createdLab);