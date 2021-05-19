const {Category} = require('../models/models');
class CategoryController{
    async create(req, res){
        const body = req.body;
        body.userId = req.user.id;
        const checkCategory = await Category.findAll({where: {name: body.name, userId: req.user.id}, raw: true});
        if(checkCategory.length){   
            return res.status(400).json({"message": "Category already exists"});
        }
        const category = await Category.create(body);
        return res.json(category);
    }

    async findAll(req,res){
        const categories = await Category.findAll({where: {userId: req.user.id}});
        return res.json(categories);
    }
}

module.exports = new CategoryController();