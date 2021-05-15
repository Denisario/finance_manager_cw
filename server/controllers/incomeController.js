const {Income,IncomeItem,Category} = require('../models/models');
const { Op } = require("sequelize");

class IncomeController{
    async create(req,res){
        const income = req.body;


        const title = await Income.create({header:income.title, userId: req.user.id});
        await income.items.forEach(el=>el.incomeId = title.dataValues.id);
        const incomeItems = await IncomeItem.bulkCreate(income.items);
        title.incomeItems = incomeItems;
        res.status(200).json(title);
    }

    async findAll(req,res){
        const data = await Income.findAll({where: {userId: req.user.id}});
        // {include:{model:IncomeItem, as:"income_items", include:{model:Category, as:"category"}}}
        res.status(200).json(data);
    }

    async findById(req,res){
        console.log("da");
        const data = await Income.findAll({where: {[Op.and]:[
            {id: req.params.id},
            {userId: req.user.id}
        ]}, include:{model:IncomeItem, as:"income_items", include:{model:Category, as:"category"}}});

        if(!data.length){
            return res.status(404).json({"message": "Income not found"});
        }
        console.log(data);
        res.status(200).json(data);
    }


}

module.exports = new IncomeController();