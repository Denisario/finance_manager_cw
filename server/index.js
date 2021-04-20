require('dotenv').config();
const sequelize = require('./db');
const app = require('express')();
const PORT = process.env.PORT ||  3000;

const start = async()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync({force: true});
        app.listen(PORT, () => console.log(`Started on the port ${PORT}`));

    }catch(e){
        console.log(e);
    }
}

start();