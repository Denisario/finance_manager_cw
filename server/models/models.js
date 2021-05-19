const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Finance = sequelize.define('finance',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    date:{type:DataTypes.DATE},
    name: {type:DataTypes.STRING},
    imgName: {type:DataTypes.STRING}
})


const FinanceItem = sequelize.define('finance_item',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING},
    amount: {type:DataTypes.INTEGER},
    price: {type:DataTypes.INTEGER}
},{timestamps:false})

const Category = sequelize.define('categories',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING}
},{timestamps:false})

const User = sequelize.define('users', {
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    password: {type:DataTypes.STRING},
    email:{type:DataTypes.STRING}
},{timestamps:false})

const Income = sequelize.define('incomes',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    header: {type:DataTypes.STRING},
    date: {type:DataTypes.DATE}
},{timestamps:false})

const IncomeItem = sequelize.define('income_items', {
    id: {type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    sum: {type:DataTypes.DECIMAL},
    title: {type:DataTypes.STRING},
},{timestamps:false})

Finance.FinanceItems = Finance.hasMany(FinanceItem);
FinanceItem.belongsTo(Finance);

Finance.belongsTo(Category);
Category.hasMany(Finance);

Category.hasMany(IncomeItem);
IncomeItem.belongsTo(Category);

Income.hasMany(IncomeItem);
IncomeItem.belongsTo(Income);

User.hasMany(Finance);
Finance.belongsTo(User);

User.hasMany(Category);
Category.belongsTo(User);

User.hasMany(Income);
Income.belongsTo(User);

module.exports = {
    Finance,
    FinanceItem,
    Category,
    User,
    Income,
    IncomeItem
}