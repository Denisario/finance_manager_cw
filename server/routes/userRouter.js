const Router =require('express');
const router = new Router();
const userController = require('../controllers/userController');
router.post('/register', userController.create);
router.post('/login', userController.findUserByUsername)


module.exports = router;