const {Income,Category} = require('../models/models');

class IncomeController{
    async create(req,res){
        const income = req.body;
        console.log(income);

        income.forEach(async(el)=> await Income.create(el));
        res.status(200).json(income);
    }

    async findAll(req,res){
        const data = await Income.findAll({include:{model:Category, as:'category'}});
        res.status(200).json(data);
    }


}

module.exports = new IncomeController();