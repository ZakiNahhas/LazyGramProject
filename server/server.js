const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();// This is new
require('./config/mongoose.config'); 
// const myFirstSecret = process.env.FIRST_SECRET_KEY;
const cookieParser = require('cookie-parser');

const jwt = require("jsonwebtoken");


app.use(cookieParser());

app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("images"))
require('./routes/teamManager.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})



