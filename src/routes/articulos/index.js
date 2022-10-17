const { Router } = require("express");
const {
  getArticulos,
  postArticulo,
  getArticulo,
  putArticulo,
  deleteArticulo,
  getArticuloID,
} = require("../../controllers/articulos/index.controller");

const router = Router();
router.get("/articulo", getArticulos);
router.post("/articulo/add", postArticulo);
router.get("/articulo/:id", getArticuloID);
router.put("/articulo/:id", putArticulo);
router.delete("/articulo/:id", deleteArticulo);
module.exports = router;
