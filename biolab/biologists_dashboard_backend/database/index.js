import mysql from 'mysql';
import cryptojs from "crypto-js";

let decrypt_ = cryptojs.AES.decrypt(process.env.AWS_CONFIGURATION_VAR_2, process.env.AWS_CONFIGURATION_VAR_1);
let decrypt_string_ = decrypt_.toString(cryptojs.enc.Utf8)

// Create connection to BioLab MySQL database:
const database = mysql.createConnection({
    host: process.env.AWS_CONFIGURATION_VAR_5,
    port: process.env.AWS_CONFIGURATION_VAR_4,
    user: process.env.AWS_CONFIGURATION_VAR_3,
    password: decrypt_string_,
    database: process.env.AWS_CONFIGURATION_VAR_6
});

// Connect to BioLab MySQL database:
database.connect( (error) => {
    if(error) 
    {
        console.log(error);
    }
    else 
    {
        console.log('Connected to BioLab Database');
    }
});

// Create Table for Labs:
// database.query('CREATE TABLE labs(id int AUTO_INCREMENT, name VARCHAR(255), type VARCHAR(255), details VARCHAR(255), toxic_chemicals VARCHAR(255), steps VARCHAR(255), connectedDevices VARCHAR(255), automateJobsProcesses VARCHAR(255), PRIMARY KEY(id))', (error, data) => {
//     if(error) {
//         throw error;
//     }
//     else {
//         console.log(data);
//         console.log('TABLE for labs CREATED');
//     }
// });


// Delete Table for Labs:
// database.query('DROP TABLE labs', (error, data) => {
//         if(error) {
//             throw error;
//         }
//         else {
//             console.log(data);
//             console.log('TABLE for labs CREATED');
//         }
//     });


export default database;