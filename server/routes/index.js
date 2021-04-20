const Router = require('express');
const router = new Router();

const financeRouter = require('./financeRouter');

router.use('/finances', financeRouter);

module.exports = router;