const {Income} = require('../models/models');

class IncomeController{
    async create(req,res){
        const income = req.body;
        console.log(income);

        income.forEach(async(el)=> await Income.create(el));
        res.status(200).json(income);
    }


}

module.exports = new IncomeController();