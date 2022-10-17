const { conexion } = require("../../db/index");
const proveedorList =
  "SELECT id_proveedor, proveedor, contacto, telefono_contacto FROM proveedores";

/** LISTAR PROVEEDOR */
const getProveedores = async (req, res) => {
  const response = await conexion.query(proveedorList);
  res.json(response.rows);
};

module.exports = {
  getProveedores,
};
