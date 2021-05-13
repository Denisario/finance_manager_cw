const Router =require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');
const {categoryValidationResult, categoryValidator} = require('../validators/categoryValidator');
const authMiddleware = require("../middleware/authMiddleware")
router.get("/",  authMiddleware,categoryController.findAll);
router.post('/', authMiddleware,categoryValidator, categoryValidationResult, categoryController.create);


module.exports = router;