const express = require("express")
const Port = process.env.PORT || 9999
const app = express()

app.get("/", (req, res)=>{
    res.send("<h1> data </h1>")
})

app.get("/api",( req, res)=>{
    const data = [{data:"test"}, {data: "ggg"}]
    res.send(data)
})
app.listen(Port)

console.log("it working  ejdfebfue")