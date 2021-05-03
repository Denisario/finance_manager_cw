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
    price: {type:DataTypes.INTEGER}
})

const Category = sequelize.define('categories',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING}
})

Finance.FinanceItems = Finance.hasMany(FinanceItem);
FinanceItem.belongsTo(Finance);

Finance.belongsTo(Category);
Category.hasMany(Finance);

module.exports = {
    Finance,
    FinanceItem,
    Category
}