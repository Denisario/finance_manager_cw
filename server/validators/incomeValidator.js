const {sendMessage} = require("../websockets/socket");
const {validationResult} = require("express-validator");
const {check} = require('express-validator');

exports.incomeValidationResult = (req,res,next)=>{
    const result = validationResult(req);

    if(!result.isEmpty()){
        const error = result.array()[0].msg;
        sendMessage(error);
        return res.status(400).json(error);
    }

    next();
}

exports.incomeValidator = [
    check("title")
        .not()
        .isEmpty()
        .withMessage('Income header is empty')
]