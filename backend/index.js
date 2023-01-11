const express = require("express");
const { register, login } = require("./controllers/AuthController");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const cors = require('cors');

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://darkevo2424:vanessamaria@cluster0.jj06vef.mongodb.net/?retryWrites=true&w=majority")

app.post("/signup",register);
app.post("/signin",login);

app.listen(PORT,function(){
    console.log(`running at ${PORT}`)
})