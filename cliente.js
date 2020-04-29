const soap = require("soap");
const url = "http://localhost:3333/calculadora?wsdl"; //url do seu serviço
const args = { amperes: "2", ohms: "2" }; //parametro do seu metodo
soap.createClient(url, function (err, client) {
  //client.seuMetodo
  client.tensao(args, function (err, result) {
    console.log(result);
  });
});
