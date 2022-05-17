//const pumpkinPatch = import('./backend/TwoDVideoGameTemplate/GameEngine.js');

//import {start} from './backend/TwoDVideoGameTemplate/GameEngine';

//const path = require('path');
//const express = require('express');



// Create an Express app
const app = express();

// Old calls:
//app.use(express.static(path.join(__dirname, 'frontend', 'build')));
//app.use(express.static(path.join(__dirname, 'biologists_dashboard', 'build')));

// load build of the Main Site:
app.use('/mainSite', express.static(path.join(__dirname, 'frontend/build')))

// load build of BioLab (Biologist's Dashboard):
app.use('/biolab', express.static(path.join(__dirname, 'biologists_dashboard/build')))


// Old call:
// // Define a callback function to respond to client's get request at '/'
// app.get('/', (req, res) => {
//     res.send("Website of Matthew Bisicchia");
// })

//Set as Landing Page:
app.get('/', (req, res) => {
  res.redirect('/mainSite/home');
});

// serve build of the Main Site:
app.get('/mainSite/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

// serve build of BioLab:
app.get('/biolab/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/biologists_dashboard/build/index.html'))
})

// serve Pumpkin Patch:
// app.get('/pumpkinpatch/*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/backend/TwoDVideoGameTemplate/index.html'))
//   pumpkinPatch.start();
// })


// Define callback function to respond to client's request;
// client will attempt to connect to the web server (to be hosted on AWS)
// through port 3000

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("matthewbisicchia.com runnning on port " + port);
});
