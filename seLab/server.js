const express = require('express');
const app = express();
const PORT  = 3005;

const bodyParser = require('body-parser');

const productRouter = require('./routes/productRoutes');
const product = require('./models/productModel');

require('./utils/db');



//MIDDLE WARES
app.use(bodyParser.json());


//API
app.use('/api',productRouter);


app.get('' ,(req,res ) => { res.send("<h1> Welcome to my application in the node </h1>");
});

app.get('/name' ,(req,res ) => { res.send("<h1> Welcome Burhan Butt </h1>");
});


app.get('/name/:ll' ,(req,res ) => {
    const name = req.params.ll
    res.send(`<h1> Welcome ,${name} </h1>`);
});

app.listen(PORT ,() => {console.log("App is listening on the port", PORT)})