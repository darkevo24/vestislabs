const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String
    },
    password : {
        type : String
    }
})

const User = mongoose.model("VestisLabs",userSchema);
module.exports = User;