const { conexion } = require("../../db/index");
const stockList =
  " select a.articulo,  a.stock_minimo, s.cantidad_disponible FROM stock s JOIN articulos a ON a.id_articulo = s.id_articulo";
/** LISTAR STOCK */
const getStock = async (req, res) => {
  const response = await conexion.query(stockList);
  res.json(response.rows);
};

module.exports = {
  getStock,
};
