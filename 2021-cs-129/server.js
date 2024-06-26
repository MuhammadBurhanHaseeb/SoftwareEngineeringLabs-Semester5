const db = require('./Utils/db');
const express = require('express');
const app = express();
const PORT  = 3005;
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');
const user = require('./models/userModel');
//MIDDLE WARES
app.use(bodyParser.json());
app.use(cors());
//API
app.use('/apii',userRoute);
app.use('/login',loginRoute);
app.get('' ,(req,res ) => { res.send("<h1> Welcome to my application in the node </h1>");
});
app.get('/name' ,(req,res ) => { res.send("<h1> Welcome Burhan Butt </h1>");
});

app.get('/name/:ll' ,(req,res ) => {
    const name = req.params.ll
    res.send(`<h1> Welcome ,${name} </h1>`);
});

app.listen(PORT ,() => {console.log("App is listening on the port", PORT)})