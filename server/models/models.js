const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Finance = sequelize.define('finance',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    date:{type:DataTypes.DATE, primaryKey:true, default: new Date()},
    name: {type:DataTypes.STRING, primaryKey:true}
})


const FinanceItem = sequelize.define('finance_item',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING},
    amount: {type:DataTypes.STRING},
    price: {type:DataTypes.INTEGER},
    category: {type:DataTypes.STRING}
})

Finance.hasMany(FinanceItem);
FinanceItem.belongsTo(Finance);

module.exports = {
    Finance,
    FinanceItem
}