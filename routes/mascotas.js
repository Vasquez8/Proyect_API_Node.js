import express from "express";
import mascotaController from "../controllers/mascota.js";
// Declaramos una varia par las rutas
const route = express.Router();
// Rutas
route.post("/", mascotaController.create);
route.get("/:id", mascotaController.getone);
route.get("/", mascotaController.getall);
route.put("/:id", mascotaController.update);
route.delete("/:id", mascotaController.delete);

export default route;
