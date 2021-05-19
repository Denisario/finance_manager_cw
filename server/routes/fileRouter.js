const Router =require('express');
const fileController = require("../controllers/fileController");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware")
router.post('/', authMiddleware, fileController.uploadFileToUserDirectory);
router.get("/:id",fileController.downloadFile)
module.exports = router;