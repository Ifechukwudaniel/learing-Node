const emmiter= require("./modules/event")


emmiter.on("SendEmailEvent" , (data)=>{
    console.log(`Message : ${data} `)
})



emmiter.emit("SendEmailEvent","send users Email")

emmiter.emit("SendEmailEvent", "Sendig User Email  to dandynmicx@gmail.com")