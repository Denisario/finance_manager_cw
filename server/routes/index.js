const Router = require('express');
const router = new Router();

const financeRouter = require('./financeRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');
const incomeRouter = require('./incomeRouter');
const fileRouter = require("./fileRouter");
router.use('/finances', financeRouter);
router.use('/categories', categoryRouter);
router.use('/income', incomeRouter);
router.use('/', userRouter);
router.use('/files', fileRouter);

module.exports = router;