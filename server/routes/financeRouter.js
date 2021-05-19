const Router =require('express');
const router = new Router();
const financeController = require('../controllers/financeController');
const {financeValidator, financeValidationResult} = require('../validators/financeValidator');
const authMiddleware = require("../middleware/authMiddleware")
router.get('/', authMiddleware,financeController.findAll);
router.get('/stat', authMiddleware,financeController.findStat);
router.get('/:id',authMiddleware, financeController.findById);
router.post('/',authMiddleware, financeValidator, financeValidationResult, financeController.create);
router.put('/:id',authMiddleware, financeValidator, financeValidationResult, financeController.update);
router.delete('/:id',authMiddleware, financeController.delete);


module.exports = router;