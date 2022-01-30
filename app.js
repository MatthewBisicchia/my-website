const express = require('express');

// Create an Express app
const app = express();

// Define a callback function to respond to client's get request at '/'
app.get('/', (req, res) => {
    res.send("Website of Matthew Bisicchia");
})

// Define callback function to respond to client's request;
// client will attempt to connect to the web server (to be hosted on AWS)
// through port 3000

app.listen(process.env.port || 3000, () => {
    console.log("Website of Matthew Bisicchia");
});
