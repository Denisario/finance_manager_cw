const Router =require('express');
const router = new Router();
const financeController = require('../controllers/financeController');
router.get('/', financeController.findAll);
router.get('/:id', financeController.findById);
router.post('/', financeController.create);
router.put('/:id', financeController.update);
router.delete('/:id', financeController.delete);


module.exports = router;