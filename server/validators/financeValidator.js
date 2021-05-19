const {validationResult} = require("express-validator");
const {check} = require('express-validator');

exports.financeValidationResult = (req,res,next)=>{
    const result = validationResult(req);

    if(!result.isEmpty()){
        const error = result.array()[0].msg;
        console.log(error);
        return res.status(400).json(error);
    }

    next();
}

exports.financeValidator = [
    check("name")
        .not()
        .isEmpty()
        .withMessage('Finance name is empty'),
]