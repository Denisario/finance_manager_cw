const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../models/models");

class UserController{
    async create(req,res){
        const {email, password, repeatPassword} =req.body;

        const chekUser = await User.findAll({where: {email}, raw:true});

        if(chekUser.length){
            return res.status(400).json({"message": "User already exists"});
        }

        if(password!==repeatPassword){
            return res.status(400).json({"message": "Password are not equal"});
        }

        const user = await User.create({email, password:bcrypt.hashSync(password,10)},{raw: true});
        delete user.password;

        return res.status(200).json(user);
    }

    async findUserByUsername(req,res){
        const {email} = req.body;

        const user = await User.findAll({where: {email}, raw:true});

        if(!user[0]){
            return res.status(400).json({"message": "user not found"});
        }

        const result = await bcrypt.compare(req.body.password,user[0].password);

        if(!result){
            return  res.status(400).json({"message": "Wrong password"});
        }

        const token = await jwt.sign({id: user[0].id},"key", {expiresIn:"20m"});
        
        return res.status(200).json({token: token, email: user[0].email, id: user[0].id});
    }
}

module.exports = new UserController();