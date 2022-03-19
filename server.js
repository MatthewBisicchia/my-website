const path = require('path');
const express = require('express');

// Create an Express app
const app = express();

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Define a callback function to respond to client's get request at '/'
app.get('/', (req, res) => {
    res.send("Website of Matthew Bisicchia");
})

// Define callback function to respond to client's request;
// client will attempt to connect to the web server (to be hosted on AWS)
// through port 3000

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Website of Matthew Bisicchia");
});
