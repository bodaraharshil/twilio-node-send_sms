const express = require("express");
const router = express.Router();

const accountsid = process.env.ACCOUNT_SID;
const authtoken = process.env.AUTH_TOKEN;
console.log(".......",accountsid,authtoken)

router.post("/sms",(req,res)=>{
    const client = require('twilio')(accountsid, authtoken);
    client.messages
  .create({
     body: 'Hello world',
     from: '+18564062055',
     to: '+917434839843'
   }).then((data)=>console.log("send message")).catch((error)=>{
       console.log("Errror",error)
   })
})


module.exports = router;