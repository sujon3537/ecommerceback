const express = require('express');
const app = express();
const chalk = require('chalk');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, function(){
    console.log(chalk.red("Port running on 3000"));
})