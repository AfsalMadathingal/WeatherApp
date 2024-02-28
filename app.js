const express = require('express')
const app = express()
require('dotenv').config();
const mainRoute= require('./routes/mainRoute.js');
const hbs = require('hbs');
const path = require('path');

const port = process.env.PORT || 3010;


app.use(express.static('public'))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use('/',mainRoute )




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})