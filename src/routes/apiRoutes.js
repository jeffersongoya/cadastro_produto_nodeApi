var ControllerApi = require("../controllers/apiController");

module.exports = app => {
  // GET
  app.get("/api/produto/:id?", async (req, res) => {
    try {
      ControllerApi.consultar(app, req, res);
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message || err });
    }
  });

  // POST
  app.post("/api/produto", async (req, res) => {
    try {
      ControllerApi.incluir(app, req, res);
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message || err });
    }
  });

  // PUT
  app.put("/api/produto/id", async (req, res) => {
    try {
      ControllerApi.alterar(app, req, res);
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message || err });
    }
  });

  // DELETE
  app.delete("/api/produto/id", async (req, res) => {
    try {
      ControllerApi.deletar(app, req, res);
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message || err });
    }
  });
};
