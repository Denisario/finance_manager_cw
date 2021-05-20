const {sendMessage} = require("../websockets/socket");
const {validationResult} = require("express-validator");
const {check} = require('express-validator');

exports.registerValidationResult = (req,res,next)=>{
    const result = validationResult(req);

    if(!result.isEmpty()){
        const error = result.array()[0].msg;
        sendMessage(error);
        return res.status(400).json(error);
    }

    next();
}

exports.registerValidator = [
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
        .withMessage("Min length of password is 8 symbols")
        .isLength({max:20})
        .withMessage("Max length of password 20 symbols"),
    check("repeatPassword")
        .not()
        .isEmpty()
        .withMessage("Repeat password is empty")
        .isLength({min:8})
        .withMessage("Min length of repeat password 8 symbols")
        .isLength({max:20})
        .withMessage("Max length of repeat password 20 symbols")

]