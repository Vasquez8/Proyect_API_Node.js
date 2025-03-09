import express from "express";
import usuarioController from "../controllers/usuario.js";

// Declaramos un variable para las rutas
const route = express.Router();

// Rutas
route.post("/", usuarioController.create);
route.get("/:id", usuarioController.getone);
route.get("/", usuarioController.getall);
route.put("/:id", usuarioController.update);
route.delete("/:id", usuarioController.delete);

export default route;
