const path = require('path');
express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an Express app
const app = express();

// Enable Cross Origin Resource Sharing
app.use(cors());

// load build of the Main Site:
app.use('/mainSite', express.static(path.join(__dirname, 'frontend/build')))

// load build of BioLab (Biologist's Dashboard):
app.use('/biolab', express.static(path.join(__dirname, 'biologists_dashboard/build')))

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

// Define callback function to respond to client's request;
// client will attempt to connect to the web server (to be hosted on AWS)
// through port 3000

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("matthewbisicchia.com runnning on port " + port);
});


// BioLab Backend Server setup:

app.use(bodyParser.json({limit:"50mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", entended: true}));

// Connect to MongoDB cluster in MongoDB Atlas:
