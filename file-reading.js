const fs = require("fs")

fs.readdir("./",(err,files)=>{
    if(err) return err;
    console.log( files)
})

fs.readFile("./global.html",'UTF-8',(err,data)=>{
    if(err)return err
    console.log( data)
})