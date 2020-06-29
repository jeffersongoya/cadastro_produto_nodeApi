var app = require("./config");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ON Porta(${port})`);
});
