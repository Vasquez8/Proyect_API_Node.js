import usuariosModels from "../models/usuarios.js";

class usuariosController {
  constructor() {}

  async create(req, res) {
    try {
      const data = await usuariosModels.create(req.body);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await usuariosModels.update(id, req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await usuariosModels.delete(id);
      res.status(206).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getall(req, res) {
    try {
      const data = await usuariosModels.getall();
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getone(req, res) {
    try {
      const { id } = req.params;
      const data = await usuariosModels.getone(id);
      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
}

export default new usuariosController();
