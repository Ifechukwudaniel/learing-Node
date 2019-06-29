const event  = require("events")
const util = require("util")

const emmiter = new  event.EventEmitter()

emmiter.on("testEvent", (message)=>{
    util.log(`Message: ${message}`)
})

//emmiter.emit("testEvent", "Welcome to event")