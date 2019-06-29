const fs = require("fs")

 if(!fs.existsSync("views")){
    fs.mkdir("views",(err)=>{
         if(err) return err
         console.log("creating view directory")
         fs.writeFile("views/index.html", "<htmal> </html>" , (err)=>{
         if(err)return err
             console.log("Creatin view files ...")
         })
     })
 }