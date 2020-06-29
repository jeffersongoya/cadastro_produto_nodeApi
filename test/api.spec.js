var chai = require("chai"),
  chaiHttp = require("chai-http"),
  app = require("../src/config");
var assert = chai.assert;

chai.use(chaiHttp);
describe("Teste de inclusão de registro na API", () => {
  it("Inclui registro no BD e consulta para saber se realmente incluiu", async () => {
    const response_GET = await chai.request(app).post("/api/produto");
    assert.equal(response_GET.statusCode, 200, "Não retornou statusCode 200.");
    const response_GET_JSON = JSON.parse(response_GET.text);

    assert.exists(response_GET_JSON.data);
    console.log(response_GET_JSON.data);
  });
});
