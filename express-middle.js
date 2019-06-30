const express = require("express")
const app = express()
const PORT = process.env.PORT || 9999

app.use("/css",express.static("./public"))
console.log(__dirname+"/public")

app.get("/", (req,res)=>{
    res.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="/css/style.css">
    </head>
    <body>
        <h1> helo world</h1>
    
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam officiis quis asperiores eveniet hic? Blanditiis, itaque explicabo. Vero deserunt dicta, quaerat tempore ut facere nesciunt eveniet minus soluta minima pariatur!</p>
        
    </body>
    </html>
    `)
})

app.listen(PORT)