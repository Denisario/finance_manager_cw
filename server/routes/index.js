const Router = require('express');
const router = new Router();

const financeRouter = require('./financeRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');
const incomeRouter = require('./incomeRouter');
router.use('/finances', financeRouter);
router.use('/categories', categoryRouter);
router.use('/income', incomeRouter);
router.use('/', userRouter);

module.exports = router;