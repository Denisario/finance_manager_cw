const Router =require('express');
const router = new Router();
const incomeController = require('../controllers/incomeController');

router.get("/", incomeController.findAll);
router.get("/:id", incomeController.findById);
router.post("/", incomeController.create);


module.exports = router;