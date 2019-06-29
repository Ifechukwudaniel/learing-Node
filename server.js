  
  const http= require("http")
  const https = require("https")

  const url = "https://jsonplaceholder.typicode.com/posts"

  let errorMsg = [{"error": "could not find route"}]

  http.createServer((req, res)=>{
     if (req.method==="GET" && req.url=="/post") {
          res.writeHead(200, {"content-type" : "text/json"})
        https.get(url, (datares)=>{

              datares.on("data",data=>{
                datares.setEncoding("UTF-8")
                   res.write(data)
              })

              datares.on("end", ()=>{
                res.end()
                console.log("request over")
              })

        })

     }
     else{
         res.writeHead(404, {"Content-Type": "text/json"})
         errorMsg= JSON.stringify(errorMsg)
         res.write(errorMsg)
         res.end()
     }
  }).listen(3000) 