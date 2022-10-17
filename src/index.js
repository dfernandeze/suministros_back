const express = require("express");
const app = express();
const cors = require("cors");

/*=== === MIDDLEWARES === ===*/
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var whitelist = ["*"];
app.options("*", cors());
app.use(cors());
/*=== ===   RUTAS   === ===*/
app.use(require("./routes/articulos/index"));
app.use(require("./routes/stock/index"));
app.use(require("./routes/proveedores/index"));

app.listen(port);
console.log(`Servido Corriendo en el Puerto ${port}.`);
