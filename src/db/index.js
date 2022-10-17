const { Pool } = require("pg");

const conexion = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "suministros",
  port: 5433,
});
module.exports = {
  conexion,
};
