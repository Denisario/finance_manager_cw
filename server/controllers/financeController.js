const {Finance, FinanceItem,FinanceItemCategories,Category, FinanceItems} = require("../models/models");

class FinanceController {
    async create(req,res){
        const body = req.body;
        body.date = new Date();
        const finance = await Finance.create(body);
        await body.finance_item.forEach(el=>el.financeId = finance.dataValues.id);
        const finItems = await FinanceItem.bulkCreate(body.finance_item);
        finance.finance_item = finItems;
        return res.json(finance);
    }

    async findAll(req,res){
        const finances = await Finance.findAll({include:{model:Category, as:'category'}});
        return res.json(finances);
    }

    async findById(req,res){
        const finances = await Finance.findAll({where: {id: req.params.id}, include:[{model:Category, as:'category'},{model:FinanceItem, as:'finance_items'}]});
        return res.json(finances);
    }

    async update(req,res){
        console.log(req.params)
        const finance = await Finance.update(req.body, {where: {id: req.params.id}, returning:true});
        return res.json(finance[1][0]);
    }

    async delete(req,res){
        const item = await Finance.findAll({where: {id: req.params.id}});
        await Finance.destroy({where: {id: req.params.id}, returning:true});
        return res.json(item);
    }
}

module.exports = new FinanceController();