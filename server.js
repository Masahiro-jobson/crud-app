// Express function is for running server on express.js at backend side.

const express = require('express');
// env module enables me to separate my secret from my source code.
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
// path module is installed in node application
const path = require('path');


const app = express();
// This variable clarifies the specific port number for the server
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'))

// parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

// set view engine
app.set("view engine", "ejs");
// __dirname return the project directory name which is crud-app
// app.set("views", path.resolve(__dirname, "views/ejs"));

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
// css/style.css


app.get('/', (req, res) =>  {
    res.render('index');
})

app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)});