const {Income,IncomeItem,Category} = require('../models/models');
const { Op } = require("sequelize");
const db = require("../db");
const {sendMessage} = require("../websockets/socket");

class IncomeController{
    async create(req,res){

        const income = req.body;

        const title = await Income.create({header:income.title, userId: req.user.id,date: new Date()});
        await income.items.forEach(el=>el.incomeId = title.dataValues.id);
        const incomeItems = await IncomeItem.bulkCreate(income.items);
        title.incomeItems = incomeItems;
        res.status(200).json(title);
    }

    async findAll(req,res){
        const data = await Income.findAll({where: {userId: req.user.id}});
        res.status(200).json(data);
    }

    async findStat(req,res){
        let query = `select header, sum,title, c.name from incomes inner join income_items ii on incomes.id = ii."incomeId" inner join categories c on c.id = ii."categoryId"`;
        if(req.query.startDate){
            query = `select header, sum,title, c.name from incomes inner join income_items ii on incomes.id = ii."incomeId" inner join categories c on c.id = ii."categoryId" where date>'${req.query.startDate}'`;
        }

        if(req.query.finishDate){
            query = `select header, sum,title, c.name from incomes inner join income_items ii on incomes.id = ii."incomeId" inner join categories c on c.id = ii."categoryId" where date<'${req.query.finishDate}'`;
        }

        if(req.query.startDate&&req.query.finishDate){
            query = `select header, sum,title, c.name from incomes inner join income_items ii on incomes.id = ii."incomeId" inner join categories c on c.id = ii."categoryId" where date<'${req.query.finishDate}' and date>'${req.query.startDate}`;
        }

        const data = await db.query(query);
        res.status(200).json(data[0]);
    }

    async findById(req,res){
        console.log("da");
        const data = await Income.findAll({where: {[Op.and]:[
            {id: req.params.id},
            {userId: req.user.id}
        ]}, include:{model:IncomeItem, as:"income_items", include:{model:Category, as:"category"}}});

        if(!data.length){
            sendMessage("Income not found");
            return res.status(404).json({"message": "Income not found"});
        }
        res.status(200).json(data);
    }


}

module.exports = new IncomeController();