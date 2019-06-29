const http = require("http")
const fs = require("fs")

http.createServer((req, res) =>{
    console.log(req.method)
    if (req.url ==="/") {
        fs.readFile("./global.html","UTF-8" , (err, data) =>{
          res.writeHead(200, {"Content-type": "text/html"})
          res.end(data)
        })
    }
    else{
         res.writeHead(200,{"content-type":"text/html"})
         res.end("<h1> could not find route </h1>")
    }
}).listen(4000)