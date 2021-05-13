const Router =require('express');
const router = new Router();
const userController = require('../controllers/userController');

const {loginValidationResult, loginValidator} = require('../validators/loginValidator');
const {registerValidationResult, registerValidator} = require('../validators/registerValidator');
router.post('/register', registerValidator, registerValidationResult, userController.create);
router.post('/login', loginValidator, loginValidationResult,userController.findUserByUsername)


module.exports = router;