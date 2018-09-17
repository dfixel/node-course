const http = require("http"),
  file = `${__dirname}/requests.log`,
  fs = require("fs");

function transformDataObjectToJson(data) {
  return `${JSON.stringify(data, null, 2)}\n`;
}

function logRequest(data) {
  console.log("Estoy por appendear");
  fs.appendFile(file, data, () => {
    console.log("Escribi todo cool");
  });
}

http.createServer((req, res) => {
  console.log("Recibi el request");
  const data = {
    url: req.url,
    headers: req.headers,
    ip: req.connection.remoteAddress,
    timestamp: new Date().toISOString()
  };
  console.log("Arme la data");
  logRequest(transformDataObjectToJson(data));

  console.log(`Request received for ${req.url}`);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(transformDataObjectToJson(data));
  console.log("Devuelvo todo");
}).listen(8000);