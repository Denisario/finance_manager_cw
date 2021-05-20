const Router =require('express');
const router = new Router();
const debtController = require("../controllers/debtController");
router.post("/",  debtController.countDebt);


module.exports = router;