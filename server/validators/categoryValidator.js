const {validationResult} = require("express-validator");
const {check} = require('express-validator');

exports.categoryValidationResult = (req,res,next)=>{
    const result = validationResult(req);

    if(!result.isEmpty()){
        const error = result.array()[0].msg;
        return res.status(400).json(error);
    }

    next();
}

exports.categoryValidator = [
    check("name")
        .not()
        .isEmpty()
        .withMessage('Category name is empty')
]