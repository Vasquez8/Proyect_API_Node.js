import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class usuariosModel {
  async create(usuario) {
    const colUsuarios = dbClient.db.collection("usuarios");
    return await colUsuarios.insertOne(usuario);
  }

  async update(id, usuario) {
    const colUsuarios = dbClient.db.collection("usuarios");
    return await colUsuarios.updateOne(
      { _id: new ObjectId(id) },
      { $set: usuario }
    );
  }

  async delete(id) {
    const colUsuarios = dbClient.db.collection("usuarios");
    return await colUsuarios.deleteOne({ _id: new ObjectId(id) });
  }

  async getall() {
    const colUsuarios = dbClient.db.collection("usuarios");
    return await colUsuarios.find({}).toArray();
  }

  async getone(id) {
    const colUsuarios = dbClient.db.collection("usuarios");
    return await colUsuarios.findOne({ _id: new ObjectId(id) });
  }
}

export default new usuariosModel();
