const path = require('path');
const express = require('express');

// Create an Express app
const app = express();

// Old calls:
//app.use(express.static(path.join(__dirname, 'frontend', 'build')));
//app.use(express.static(path.join(__dirname, 'biologists_dashboard', 'build')));

// Serve the website of Matthew Bisicchia:
app.use(express.static(path.join(__dirname, 'frontend/build')))

// Serve BioLab (Biologist's Dashboard):
app.use('/biolab', express.static(path.join(__dirname, 'biologists_dashboard/build')))


// Old call:
// // Define a callback function to respond to client's get request at '/'
// app.get('/', (req, res) => {
//     res.send("Website of Matthew Bisicchia");
// })


// Host builds of each app: 

  // Temporarily Commented Out:
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
  // });

  app.get('/biolab/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/biologists_dashboard/build/index.html'))
  })


// Define callback function to respond to client's request;
// client will attempt to connect to the web server (to be hosted on AWS)
// through port 3000

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Website of Matthew Bisicchia on port" + port);
});
