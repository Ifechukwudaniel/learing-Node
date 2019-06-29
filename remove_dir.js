const fs = require("fs")

// fs.rmdirSync(".vs", ()=>{

// })
try {
    fs.unlinkSync("./.vs")    
} catch (error) {
    console.log(error)
}
