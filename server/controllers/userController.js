const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../models/models");

class UserController{
    async create(req,res){
        console.log(req.body);
        const {email, password} =req.body.data;
        const user = await User.create({email, password:bcrypt.hashSync(password,10)});
        return res.status(200).json(user);
    }
    async findUserByUsername(req,res){
        const {email} = req.body.data;
        const user = await User.findAll({where: {email}});
        const token = await jwt.sign({email},"key", {expiresIn:"20m"});
        return res.status(200).json({token: token, email: user.email});
    }
}

module.exports = new UserController();