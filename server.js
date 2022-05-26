import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Overall Express App Setup (Including Main Site and BioLab) //


// Create an Express app
const app = express();

// Setup Body Parser:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable Cross Origin Resource Sharing
app.use(cors({origin: true}));

// Load build of the Main Site:
app.use('/mainSite', express.static(path.join(__dirname, 'frontend/build')))

// Load build of BioLab (Biologist's Dashboard):
app.use('/biolab', express.static(path.join(__dirname, 'biolab/biologists_dashboard/build')))

// Set as Landing Page:
app.get('/', (req, res) => {
  res.redirect('/mainSite/home');
});

// Serve build of the Main Site:
app.get('/mainSite/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

// Serve build of BioLab:
app.get('/biolab/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/biolab/biologists_dashboard/build/index.html'))
})

// Define callback function to respond to client's request;
// client will attempt to connect to the web server (to be hosted on AWS)
// through port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("matthewbisicchia.com runnning on port " + port);
});


// BioLab Backend Setup: //

import labs_routes from './biolab/biologists_dashboard_backend/routes/labs_routes.js';

app.use('/biolab_api/labs', labs_routes);
