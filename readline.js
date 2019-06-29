
const readline = require('readline')
const Util = require("util")


const  rl = readline.createInterface(process.stdin,process.stdout)


rl.question("what is your name " , (name)=>{
    rl.setPrompt(`${name.trim()} how old are you `)

    rl.prompt()

    rl.on("line", (age)=>{
        if (age<18) {
            Util.log(" sorry you are less tha age requriment")
            rl.close()
        } else {
            Util.log("welcome to hack class") 
            rl.close()
        }  

    })
})