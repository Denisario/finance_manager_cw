const {Finance, FinanceItem,Category} = require("../models/models");
const sequelize = require("sequelize");

class FinanceController {
    async create(req,res){
        const body = req.body;
        body.date = new Date();
        body.userId = req.user.id;
        const finance = await Finance.create(body);

        console.log(body.date);
        await body.finance_item.forEach(el=>el.financeId = finance.dataValues.id);
        const finItems = await FinanceItem.bulkCreate(body.finance_item);

        finance.finance_item = finItems;
        return res.json(finance);
    }

    async findAll(req,res){
        let data = {userId: req.user.id};

        if(req.query.startDate){
            data = {userId: req.user.id, date:{[sequelize.Op.gt]: new Date(req.query.startDate)}};
        }

        if(req.query.finishDate){
            data = {userId: req.user.id, date:{[sequelize.Op.lt]: new Date(req.query.finishDate)}};
        }

        if(req.query.finishDate&&req.query.startDate){
            data = {userId: req.user.id, date:{[sequelize.Op.between]: [new Date(req.query.startDate),new Date(req.query.finishDate)]}};
        }

        const col = await Finance.count({where:data});
        const finances = await Finance.findAll({where:data,order:[['date', "DESC"]],include:{model:Category, as:'category'}, limit: req.query.itemsPerPage, offset: req.query.page*req.query.itemsPerPage});
        return res.json({totalFinances: col, finances});
    }

    async findById(req,res){
        const finances = await Finance.findAll({where: {[sequelize.Op.and]:[
                    {id: req.params.id},
                    {userId: req.user.id}
                ]}, include:[{model:Category, as:'category'},{model:FinanceItem, as:'finance_items'}]});

        if(!finances[0]){
            return res.status(404).json({"message": "Finance not found"})
        }
        return res.json(finances);
    }

    async update(req,res){
        const finance = await Finance.update(req.body, {where: {[sequelize.Op.and]:[
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