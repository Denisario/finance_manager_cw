const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../models/models");
const webDav = require("../other/webdav");
const {sendMessage} = require("../websockets/socket");
class UserController{
    async create(req,res){
        const {email, password, repeatPassword} =req.body;

        const chekUser = await User.findAll({where: {email}, raw:true});

        if(chekUser.length){
            sendMessage("User already exists");
            return res.status(400).json({"message": "User already exists"});
        }

        if(password!==repeatPassword){
            sendMessage("Passwords are not equal");
            return res.status(400).json({"message": "Password are not equal"});
        }

        const user = await User.create({email, password:bcrypt.hashSync(password,10)},{raw: true});
        delete user.password;

        webDav.createUserFolder(user.dataValues.email);

        console.log(user);


        return res.status(200).json(user);
    }

    async findUserByUsername(req,res){
        const {email} = req.body;

        const user = await User.findAll({where: {email}, raw:true});

        if(!user[0]){
            console.log("da");
            sendMessage("User not found");
            return res.status(400).json({"message": "User not found"});
        }

        const result = await bcrypt.compare(req.body.password,user[0].password);

        if(!result){
            console.log("da1");
            sendMessage("Wrong password");
            return  res.status(400).json({"message": "Wrong password"});
        }

        const token = await jwt.sign({id: user[0].id, email: user[0].email},"key", {expiresIn:"24h"});

        return res.status(200).json({token: token, email: user[0].email, id: user[0].id});
    }
}

module.exports = new UserController();