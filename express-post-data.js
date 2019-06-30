const express = require("express")
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 9999
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({"extended": false}))

app.use("/assets",express.static(__dirname+"/public"))

app.use((req, res,next)=>{
    console.log("Middleware test")
    next()
})

app.post("/post", (req,res)=>{

    console.log(req.body.email)
    console.log(req.body.pwd)
    console.log(req.body.remember)
    res.send( req.body)

})

app.listen(PORT)

console.log("it is working")