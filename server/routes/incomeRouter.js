const Router =require('express');
const router = new Router();
const incomeController = require('../controllers/incomeController');
const {incomeValidator, incomeValidationResult} = require('../validators/incomeValidator');
const authMiddleware = require("../middleware/authMiddleware")
router.get("/", authMiddleware,incomeController.findAll);
router.get("/:id",authMiddleware, incomeController.findById);
router.post("/",authMiddleware,incomeValidator, incomeValidationResult, incomeController.create);


module.exports = router;