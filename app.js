import "dotenv/config";
import express from "express";
import routesMascotas from "./routes/mascotas.js";
import routesUsuarios from "./routes/usuarios.js";
import bodyParser from "body-parser";

// Creamos una instancia de express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/mascotas", routesMascotas);
app.use("/usuarios", routesUsuarios);

try {
  // Si el puerto 5100 no esta  disponible se ejecutara en el 3000
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log("Se levanto en el puerto: " + PORT));
} catch (e) {
  console.log(e);
}
