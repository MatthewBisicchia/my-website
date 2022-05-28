import { getAllLabs, getLabById, createNewLab, deleteAllLabs } from '../data_services/labs_data_service.js';
import express from 'express';

const router = express.Router();

router.get('/getAllLabs', getAllLabs);

router.get('/getLabById/:id', getLabById);

router.post('/createNewLab', createNewLab);

router.delete('/deleteAllLabs', deleteAllLabs);


export default router;
