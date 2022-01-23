//this is the server file
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection')
const path = require('path')
const models = require('./models')
const routes = require('./controllers')

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',routes);
app.get("/",(req,res)=>{
    res.send("working now")
})



sequelize.sync({ false: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening on a port!!'));
});