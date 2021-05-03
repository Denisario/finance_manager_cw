const Router = require('express');
const router = new Router();

const financeRouter = require('./financeRouter');
const categoryRouter = require('./categoryRouter');
router.use('/finances', financeRouter);
router.use('/categories', categoryRouter);

module.exports = router;