//1. require http  core node module
const http = require("http");
const fs = require("fs");
const _ = require("lodash");

//2. create a server with the http module, pass a callback function as a parameter and pass to objects: request and response
const server = http.createServer((req, res) => {
  //lodash package
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("Hello World");
  });

  greet();
  greet();
  //set header content-type for the response
  //1. setHeader
  res.setHeader("Content-Type", "text/html");

  //2. set up routing system
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      res.statusCode = 200;
      path += "about.html";
      break;
    //redirect case - statusCode 301
    case "/about-marlene":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //2. send a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });
});

//3. invoke the listen method so the server starts to listen the request, and pass as an argument the port  number, the host (IP or local host), and a callback function
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
