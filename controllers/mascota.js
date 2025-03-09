import mascotasModels from "../models/mascotas.js";

class mascotasController {
  constructor() {}

  // metodos basicos de un CRUD

  async create(req, res) {
    try {
      const data = await mascotasModels.create(req.body);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await mascotasModels.update(id, req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await mascotasModels.delete(id);
      res.status(206).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getall(req, res) {
    try {
      const data = await mascotasModels.getall();
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getone(req, res) {
    try {
      const { id } = req.params;
      const data = await mascotasModels.getone(id);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}
export default new mascotasController();
