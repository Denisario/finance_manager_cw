const Router =require('express');
const router = new Router();
const incomeController = require('../controllers/incomeController');
const {incomeValidator, incomeValidationResult} = require('../validators/incomeValidator');
const authMiddleware = require("../middleware/authMiddleware")
router.get("/", authMiddleware,incomeController.findAll);
router.get("/stat", authMiddleware,incomeController.findStat);
router.get("/:id",authMiddleware, incomeController.findById);
router.post("/",incomeValidator, incomeValidationResult,authMiddleware, incomeController.create);


module.exports = router;