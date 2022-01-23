//this is the server file
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection')
const path = require('path')
const models = require('./models')

app.get("/",(req,res)=>{
    res.send("working now")
})

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on a port!!'));
});