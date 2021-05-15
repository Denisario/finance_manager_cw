const {Category} = require('../models/models');
class CategoryController{
    async create(req, res){
        const body = req.body;
        body.userId = req.user.id;
        const category = await Category.create(body);
        return res.json(category);
    }

    async findAll(req,res){
        const categories = await Category.findAll({where: {userId: req.user.id}});
        return res.json(categories);
    }
}

module.exports = new CategoryController();