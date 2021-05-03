const {Finance, FinanceItem,FinanceItemCategories,Category, FinanceItems} = require("../models/models");

class FinanceController {
    async create(req,res){
        const body = req.body;
        console.log(body);
        body.date = new Date();
        const finance = await Finance.create(body);
        return res.json(finance);
    }

    async findAll(req,res){
        const finances = await Finance.findAll();
        return res.json(finances);
    }

    async findById(req,res){
        const finances = await Finance.findAll({where: {id: req.params.id}, include:[{model:FinanceItem,as: "finance_item", include:{model: Category}}]})
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