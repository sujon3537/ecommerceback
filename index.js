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

app.get('/test', function (req, res){
  res.json([
    {
      name: "Tata"
    },
    {
      name: "Ashok Leyland"
    },
    {
      name: "Eicher"
    },
  ])
})

app.listen(3000, function(){
    console.log(chalk.red("Port running on 3000"));
})