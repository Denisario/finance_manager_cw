const {Finance, FinanceItem,FinanceItemCategories,Category, FinanceItems} = require("../models/models");
const { Op } = require("sequelize");

class FinanceController {
    async create(req,res){
        const body = req.body;
        body.date = new Date();
        body.userId = req.user.id;
        const finance = await Finance.create(body);


        await body.finance_item.forEach(el=>el.financeId = finance.dataValues.id);
        const finItems = await FinanceItem.bulkCreate(body.finance_item);

        finance.finance_item = finItems;
        return res.json(finance);
    }

    async findAll(req,res){
        console.log(req.query);

        // date: {[Op.lt]: req.query.startDate, [Op.gt]: req.query.finishDate}
        const finances = await Finance.findAll({where:{userId: req.user.id},include:{model:Category, as:'category'}, limit: req.query.itemsPerPage, offset: req.query.page*req.query.page});
        return res.json(finances);
    }

    async findById(req,res){
        const finances = await Finance.findAll({where: {[Op.and]:[
                    {id: req.params.id},
                    {userId: req.user.id}
                ]}, include:[{model:Category, as:'category'},{model:FinanceItem, as:'finance_items'}]});

        if(!finances[0]){
            return res.status(404).json({"message": "Finance not found"})
        }
        return res.json(finances);
    }

    async update(req,res){
        const finance = await Finance.update(req.body, {where: {[Op.and]:[
                    {id: req.params.id},
                    {userId: req.user.id}
                ]}, returning:true});

        if(!finance[1][0]){
            return res.status(404).json({"message": "Finance not found"})
        }

        return res.json(finance[1][0]);
    }

    async delete(req,res){
        const item = await Finance.findAll({where: {id: req.params.id}});

        if(!item.length){
            return res.status(404).json({"message": "Finance not found"})
        }

        await Finance.destroy({where: {id: req.params.id}, returning:true});
        return res.json(item);
    }
}

module.exports = new FinanceController();