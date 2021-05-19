const YandexDisk = require("yandex-disk").YandexDisk;
const path = require("path");
class webDav{
    getConnection(){
        const disk = new YandexDisk("AQAAAABU6CvzAAcfWVi9ORDxfkafmLZOiN5vz_Q");
        return disk;
    }

    createUserFolder(userName){
        this.getConnection().mkdir(`/${userName}`,()=>{
            console.log("Created");
        });
    }

    async uploadFile(path, username,imgName){
        try {
            const connection = this.getConnection();
            connection.exists(username, (err,data)=>{
                console.log(err,data);
            });
            connection.cd(username);
            connection.uploadFile(path, imgName, (err,data)=>{
            })
        }
        catch (e){
            console.log(e);
        }
    }

    async downloadFile(username,filename){
            const connection = this.getConnection();

            await connection.cd(username);

            await connection.downloadFile(filename, path.join(__dirname, `../cache/output/${filename}.png`))
    }
}

module.exports = new webDav();