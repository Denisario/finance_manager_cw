const Router =require('express');
const router = new Router();
const incomeController = require('../controllers/incomeController');

router.post("/", incomeController.create);


module.exports = router;