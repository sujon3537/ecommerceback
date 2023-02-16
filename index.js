const express = require('express');
const app = express();
const chalk = require('chalk');

app.get('/', function (req, res) {
  res.json([
    {
      name: "Hino",
    },
    {
      name: "Isuzu",
    },
    {
      name: "Mitsubishi",
    },
  ])
})

app.listen(3000, function(){
    console.log(chalk.red("Port running on 3000"));
})