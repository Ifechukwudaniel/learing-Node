const http = require("http")
const fs = require('fs')

const server = http.createServer((req, res)=>{
  fs.readFile("about.html", (err,data)=>{
      if (req.url === '/about') {
          res.writeHead(200,{"Content-Type" : "text/html"})
          res.end(data)
      }
      else{
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end("<h1> could not find Route </h1>")
      }
  })
}).listen(3000)