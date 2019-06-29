const fs = require("fs")

fs.writeFile("./modules/data.txt",` \n Hello from the file \n `,'utf8' , (err)=>{
   if(err) return err
   console.log("written file")
})

fs.appendFile("./modules/data.txt" ,  " \n the appened text \n", "Utf8" , (err)=>{
    if(err) return err
     console.log("written file")
})