const http = require("http")

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("<h1> test the server </h1>")
})

server.listen(7000)

console.log("server is running on port 3000")