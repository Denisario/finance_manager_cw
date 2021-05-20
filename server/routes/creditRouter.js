const Router =require('express');
const router = new Router();
const credit = require("../controllers/creditController");
router.post("/",  credit.countCredit);


module.exports = router;