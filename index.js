require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const chalk = require('chalk');
const routes = require('./routes')

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.get(routes)

app.listen(3000, function(){
    console.log(chalk.red("Port running on 3000"));
})