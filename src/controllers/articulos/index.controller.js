const { conexion } = require("../../db/index");
const articuloList =
  " SELECT categorias.categoria, a.id_articulo, a.articulo, a.id_categoria, cast(case when a.estado = 'A' THEN 'ACTIVO' ELSE 'INACTIVO' END as varchar)estado FROM articulos a JOIN categorias ON a.id_categoria = categorias.id_categoria";
const articuloView =
  "SELECT categorias.categoria, a.id_articulo, a.articulo, a.id_categoria, cast(case when a.estado = 'A' THEN 'ACTIVO' ELSE 'INACTIVO' END as varchar)estado FROM articulos a JOIN categorias ON a.id_categoria = categorias.id_categoria WHERE id_articulo = $1";
const articuloDelete = "DELETE FROM articulos WHERE id_articulo = $1";
const articuloEdit =
  "UPDATE articulos SET articulo = $2, id_categoria = $3 WHERE id_articulo = $1 RETURNING id_articulo";
const articuloAdd =
  "INSERT INTO articulos(articulo, id_categoria, estado) VALUES($1, $2, 'A') RETURNING id_articulo";

/** LISTAR ARTICULOS */
const getArticulos = async (req, res) => {
  const response = await conexion.query(articuloList);
  res.json(response.rows);
};
/** LISTAR ARTICULO POR ID */
const getArticuloID = async (req, res) => {
  const response = await conexion.query(articuloView, [req.params.id]);
  res.json(response.rows);
};
/** AGREGAR ARTICULO */
const postArticulo = async (req, res) => {
  const { art, cat } = req.body;
  const response = await conexion.query(articuloAdd, [art, cat]);
  res.send(response.rows[0]);
};
/** ACTUALIZAR ARTICULO */
const putArticulo = async (req, res) => {
  const { name, email } = req.body;
  const id = parseInt(req.params.id);
  const response = await conexion.query(articuloEdit, [id, name, email]);
  res.json({
    message: "Actualizacion Exitosa",
    body: {
      user: { id, name, email },
    },
  });
};
/** BORRAR ARTICULO */
const deleteArticulo = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await conexion.query(articuloDelete, [id]);
  res.json({
    message: "Eliminación Exitosa",
    body: {
      user: { id },
    },
  });
};
module.exports = {
  getArticulos,
  getArticuloID,
  postArticulo,
  putArticulo,
  deleteArticulo,
};
