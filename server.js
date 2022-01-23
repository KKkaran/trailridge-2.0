//this is the server file
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


app.get("/",(req,res)=>{
    res.send("working now")
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})