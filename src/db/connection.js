const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics").then(() => {
    console.log("Conncetion Suceessfull.....");
}).catch((e) => {
    console.log("NO conncetion 👎 👎")
});