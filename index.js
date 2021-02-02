require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const Sms = require("./routes/sms");

app.use(Sms);

app.listen(PORT,()=>{
    console.log("server runing",PORT);
})