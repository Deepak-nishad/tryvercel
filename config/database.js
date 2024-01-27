const mongoose = require('mongoose');
require("dotenv").config();

const dbconnect = () => {
    // mongoose.connect(process.env.DatabaseUrl)
    mongoose.connect('mongodb+srv://ramanandsager57100:Deepak123@cluster0.ep4h9z1.mongodb.net/mydatabase')
        .then(() => { console.log("db connection succesfull") })
        .catch((error) => {
            console.log("Issue in db coonection");
            console.error(error.message)
            process.exit(1);
        })
}

module.exports = dbconnect;