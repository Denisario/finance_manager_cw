const Router =require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');
router.get("/", categoryController.findAll);
router.post('/', categoryController.create);


module.exports = router;