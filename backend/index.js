const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());


//initialise the backend port
const PORT = 4000;

var server = app.listen(PORT, () => {
    console.log(`Backend is listening on port ${PORT}\n`)
});
server.setTimeout(5 * 60 * 1000);

//create the routes


app.get('/', (req, res) => {
    console.log("Pinged")
    res.send(["Pinged"])
});


// Register page route
    //call function to res.send() register page data
app.post("/registerUser", (req, res) => {
    /**
     * fetch(http://localhost:5005/storedLoginCreds, {
     * method: POST
     * body: req.body
     * })
     */
});
// Login page route
    //functionality to verifiy credentials
app.post("/loginUser", (req, res) => {
    bayUser = req.body;
    if (!bayUser.user || !bayUser.password){
        res.send(["You need to enter all your credentials"]);
        return;
    }

    //TODO: Add function that fetches data from an endpoint
    //E.g:
    /**
     * fetch(http://localhost:5005/storedLoginCreds/bayUser.user)
     * .then((fetchedCreds) => {
     * if (fetchedCreds.response.statusCode == 200 && fetchedCreds.data == bayUser){
     *  console.log("IoT Bay LOGGED IN")
     * }
     * else{
     *  console.log("IoT Bay LOGIN FAILED")
     *  res.status(403).send(["Login failed"])
     * }
     */
});

