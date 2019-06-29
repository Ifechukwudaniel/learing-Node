const execute = require("child_process").exec

execute("echo testing console", (err, std)=>{
   if(err){
       return err
   }
       console.log(std)
})