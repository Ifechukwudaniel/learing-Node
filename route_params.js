const express = require("express")
const PORT = process.env.PORT|| 9999
const app = express()

app.get("/", (req,res) =>{
    res.send("<h1> the data </h1>")
})

app.get("/posts/:id", (req,res) =>{
     res.send(`
        Here is ${req.params.id}
     `)
})

app.get("/posts/:id/cart/:cart_id", (req, res)=>{
    res.send(`
    here is ${req.params.cart_id}`)
})

app.listen(PORT)
console.log("it working")