const { Router } = require("express");
const {
  getProveedores,
} = require("../../controllers/proveedores/index.controller");

const router = Router();
router.get("/proveedores", getProveedores);
module.exports = router;
