const uuid = require("uuid");
const path = require('path');
const webdav = require("../other/webdav")
const fs = require("fs");

const {Finance} = require("../models/models");

class FileController{
    async uploadFileToUserDirectory(req,resp){
        const file = req.files.file;
        const filename = file.name.split(".");
        file.name = uuid.v4();
        await file.mv(path.join(__dirname, `../cache/photo/${file.name}.${filename[1]}`));
        await webdav.uploadFile(path.join(__dirname, `../cache/photo/${file.name}.${filename[1]}`), req.user.email, file.name);
        const finance = await Finance.findAll({limit:1, where: {userId: req.user.id}, order:[["id","DESC"]],raw:true});
        const update = await Finance.update({imgName: file.name+"."+filename[1]},{where: {id:finance[0].id}});
        return resp.status(200).json({"fileName":file.name});
    }

    async downloadFile(req,resp){
        try{
            const options = {
                root: path.join(__dirname, `../cache/output`),
                dotfiles: 'deny',
                headers: {
                    'x-timestamp': Date.now(),
                    'x-sent': true
                }
            }
            const finance = await Finance.findAll({where:{id: req.params.id}, raw:true});
            // выпилить!!!!!!!!!! await webdav.downloadFile("krotik96@gmail.com", finance[0].imgName.split(".")[0]);
            return resp.sendFile(finance[0].imgName,options,(err)=>{
                console.log(err,finance[0].imgName,options.root);
            });
        }catch (e){
            console.log(e);
        }

    }
}

module.exports = new FileController();