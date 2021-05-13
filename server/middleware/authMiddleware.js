const jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {
    if(req.method === 'OPTIONS'){
        return next();
    }
    
    const token = req.headers.authorization.split(" ")[1];

    const data = jwt.verify(token, "key");
    req.user = data;
    next();
}