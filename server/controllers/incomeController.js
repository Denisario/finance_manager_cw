const {Income,IncomeItem,Category} = require('../models/models');

class IncomeController{
    async create(req,res){
        const income = req.body;
        const title = await Income.create({header:income.title});
        await income.items.forEach(el=>el.incomeId = title.dataValues.id);
        const incomeItems = await IncomeItem.bulkCreate(income.items);
        title.incomeItems = incomeItems;
        res.status(200).json(title);
    }

    async findAll(req,res){
        const data = await Income.findAll();
        // {include:{model:IncomeItem, as:"income_items", include:{model:Category, as:"category"}}}
        res.status(200).json(data);
    }

    async findById(req,res){
        console.log("da");
        const data = await Income.findAll({where: {id: req.params.id}, include:{model:IncomeItem, as:"income_items", include:{model:Category, as:"category"}}});
        console.log(data);
        res.status(200).json(data);
    }


}

module.exports = new IncomeController();