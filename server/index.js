require('dotenv').config();
const sequelize = require('./db');
const models = require("./models/models");
const cors =require('cors');
const express = require('express');
const routes = require('./routes/index');
const fileUpload = require("express-fileupload");
const path = require('path');
const PORT = process.env.PORT ||  3000;
const app = express();
const ws = require("./websockets/socket");
app.use(express.json());
app.use(fileUpload({}));
app.use(cors());
app.use("/api", routes);

const start = async()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Started on the port ${PORT}`));

    }catch(e){
        console.log(e);
    }
}

start();