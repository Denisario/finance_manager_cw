const {validationResult} = require("express-validator");
const {check} = require('express-validator');

exports.incomeValidationResult = (req,res,next)=>{
    const result = validationResult(req);

    if(!result.isEmpty()){
        const error = result.array()[0].msg;
        return res.status(400).json(error);
    }

    next();
}

exports.incomeValidator = [
    check("header")
        .not()
        .isEmpty()
        .withMessage('Income header is empty')
]