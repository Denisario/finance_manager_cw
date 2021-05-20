const {sendMessage} = require("../websockets/socket");
const {validationResult} = require("express-validator");
const {check} = require('express-validator');

exports.loginValidationResult = (req,res,next)=>{
    const result = validationResult(req);

    if(!result.isEmpty()){
        const error = result.array()[0].msg;
        sendMessage(error);
        return res.status(400).json(error);
    }

    next();
}

exports.loginValidator = [
    check("email")
        .isEmail()
        .withMessage("Wrong format of email")
        .not()
        .isEmpty()
        .withMessage('Email is empty'),
    check("password")
        .not()
        .isEmpty()
        .withMessage("Password is empty")
        .isLength({min:8})
        .withMessage("Min length 8 symbols")
        .isLength({max:20})
        .withMessage("Max length 20 symbols")
]