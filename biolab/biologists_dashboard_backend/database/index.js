import mysql from 'mysql';
//import cryptojs from "crypto-js";

//let decrypt_ = cryptojs.AES.decrypt(process.env.AWS_CONFIGURATION_VAR_2, process.env.AWS_CONFIGURATION_VAR_1);
//let decrypt_string_ = decrypt_.toString(cryptojs.enc.Utf8)

// Create connection to BioLab MySQL database:
const database = mysql.createConnection({
    host: process.env.AWS_CONFIGURATION_VAR_5,
    port: process.env.AWS_CONFIGURATION_VAR_4,
    user: process.env.AWS_CONFIGURATION_VAR_3,
    password: process.env.AWS_CONFIGURATION_VAR_2,
    database: process.env.AWS_CONFIGURATION_VAR_1
});

console.log("Attempted Connection to database " + process.env.AWS_CONFIGURATION_VAR_1);

// Connect to BioLab MySQL database:
database.connect( (error) => {
    if(error) 
    {
        console.log("COULD NOT CONNECT TO DATABASE");
        console.log(error);
    }
    else 
    {
        console.log('Connected to BioLab Database');
    }
});

export default database;