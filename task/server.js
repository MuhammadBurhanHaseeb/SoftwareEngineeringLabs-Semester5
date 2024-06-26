const db = require('./utils/db');
const express = require('express');
const app = express();
const PORT  = 3005;
const cors = require('cors');
const bodyParser = require('body-parser');

const cardtRoute = require('./routes/cardRoute');
const card = require('./models/cardModel');




//MIDDLE WARES
app.use(bodyParser.json());
app.use(cors());


//API
app.use('/api',cardtRoute);


app.get('' ,(req,res ) => { res.send("<h1> Welcome to my application in the node </h1>");
});

app.get('/name' ,(req,res ) => { res.send("<h1> Welcome Burhan Butt </h1>");
});


app.get('/name/:ll' ,(req,res ) => {
    const name = req.params.ll
    res.send(`<h1> Welcome ,${name} </h1>`);
});

app.listen(PORT ,() => {console.log("App is listening on the port", PORT)})