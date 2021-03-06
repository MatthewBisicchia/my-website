/*
 * Backend Configuration for www.matthewbisicchia.com
 *
 * Repository Rebased on 5/26/2022 in order to have commits throughout Jan. 30 - May 26 have
 * email matthewbisicchia@gmail.com.
 */

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';



// Overall Express App Setup (Including Main Site and BioLab) //

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Create an Express app
const app = express();

app.use(express.json());

// Setup Body Parser:
app.use(bodyParser.json({limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));


// CORS setup:
app.use(function(request, response, next) {
  response.status(200);
  response.header("Access-Control-Allow-Origin", 'https://matthewbisicchia.com');
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Enable Cross Origin Resource Sharing
app.use(cors({ origin: 'https://matthewbisicchia.com', optionsSuccessStatus: 200 }));

// Load build of the Main Site:
app.use('/mainSite', express.static(path.join(__dirname, 'frontend/build')))

// Load build of BioLab (Biologist's Dashboard):
app.use('/biolab', express.static(path.join(__dirname, 'biolab/biologists_dashboard/build')))

// BioLab Backend Setup: //
import labs_routes from './biolab/biologists_dashboard_backend/routes/labs_routes.js';
app.use('/biolab_api/labs', labs_routes);


// Set as Landing Page:
app.get('/', (request, response) => {
  response.status(200).redirect('/mainSite/home');
});

// Serve build of the Main Site:
app.get('/mainSite/*', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

// Serve build of BioLab:
app.get('/biolab/*', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/biolab/biologists_dashboard/build/index.html'))
})

// Define callback function to respond to client's request;
// client will attempt to connect to the web server (to be hosted on AWS)
// through port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("matthewbisicchia.com runnning on port " + port);
});
