const jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {
    if(req.method === 'OPTIONS'){
        return next();
    }
    
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(req.headers.authorization);
        if(!token){
            return res.status(403).json({message: "ERROR AUTH"});
        }
        const data = jwt.verify(token, "key");
        req.user = data;
        next();
    }catch (e){
        res.status(403).json({message: "ERROR AUTH"});
    }
}