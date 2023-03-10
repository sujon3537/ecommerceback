const mongoose = require('mongoose')
const chalk = require('chalk');

const dbSetup = () => {
    mongoose.set("strictQuery", false)
    mongoose.connect(process.env.DB_URL,() => {
        console.log(chalk.green("db connected"))
    })
}

module.exports = dbSetup