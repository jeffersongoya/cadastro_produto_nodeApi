var DB = require("../db/dbConnection");

class ControllerApi {
  consultar = async (app, req, res) => {
    const _id = req.params.id;
    res.status(200).json({ message: "OK" });
  };

  incluir = async (app, req, res) => {
    const body = req.body;
    const database = await new DB().connect("mongodb", "cadastro_produtos");
    try {
      const response = await database.insert("produtos", body);
      res.status(200).json({ status: 200, message: "OK", data: response });
    } finally {
      await database.close();
    }
  };

  alterar = async (app, req, res) => {
    const _id = req.params.id;
  };

  deletar = async (app, req, res) => {
    const _id = req.params.id;
    const database = await new DB().connect("mongodb", "cadastro_produtos");
    try {
      const response = await database.delete("produtos", { _id: _id });
      res.status(200).json({ status: 200, message: "OK", data: response });
    } finally {
      await database.close();
    }
  };
}

module.exports = new ControllerApi();
