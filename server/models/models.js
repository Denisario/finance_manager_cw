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

const User = sequelize.define('users', {
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    password: {type:DataTypes.STRING},
    email:{type:DataTypes.STRING}
})

const Procents = sequelize.define('procents',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    procents: {type:DataTypes.INTEGER}
})

const Income = sequelize.define('incomes',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    sum : {type:DataTypes.DECIMAL},
})

Finance.FinanceItems = Finance.hasMany(FinanceItem);
FinanceItem.belongsTo(Finance);

Finance.belongsTo(Category);
Category.hasMany(Finance);

Category.hasMany(Income);
Income.belongsTo(Category);

module.exports = {
    Finance,
    FinanceItem,
    Category,
    User,
    Procents, 
    Income
}