const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Finance = sequelize.define('finance',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    date:{type:DataTypes.DATE},
    name: {type:DataTypes.STRING}
})


const FinanceItem = sequelize.define('finance_item',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING},
    amount: {type:DataTypes.STRING},
    price: {type:DataTypes.INTEGER},
    category: {type:DataTypes.STRING}
})

const FinanceItems = Finance.hasMany(FinanceItem, {as: "finance_item"});
FinanceItem.belongsTo(Finance,{
    onDelete: "CASCADE",
    foreignKey:"financeId"
});

module.exports = {
    Finance,
    FinanceItem,
    FinanceItems
}