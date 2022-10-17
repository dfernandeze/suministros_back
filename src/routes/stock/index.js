const { Router } = require("express");
const { getStock } = require("../../controllers/stock/index.controller");
const router = Router();
router.get("/stock", getStock);
module.exports = router;
