const mongoose = require("mongoose");

const olympicSchema = mongoose.Schema({
    ranking:{
        type:String,
        required :true, 
    },
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100 m"
    }
});

// We are creating a new collection
const Running = new mongoose.model("Runnig",olympicSchema);

module.exports = Running;