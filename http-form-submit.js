const http = require("http")
const fs = require("fs")

http.createServer((req,res)=>{
      let body =""
     
      if (req.method==="GET") {
        console.log( req.method )
        res.writeHead(200, {
            "Content-Type": "text/html"
        })

        fs.readFile("http-form.html","UTF-8",(err, data)=>{
            if (err) throw err
            res.write(data)
            res.end()
        })
      }
      else if (req.method==="POST") {
          console.log(req.method)
          req.setEncoding("UTF-8")
          req.on("data", (chunk)=>{
             body+= chunk
          })
           req.on("end", ()=>{
            res.write(body,(err)=>{
                
            })
            res.end()
         })
      }
      else{
          console.log(req.method)
          res.writeHead(404, {
              "Content-Type": "text/plain"
          })
          res.write("The request is false")
          res.end()
      }

}).listen(4444)

console.log("it is working")