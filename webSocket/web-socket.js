const WebSocketServer = require("ws").Server

const WSS = new WebSocketServer({port: 3000})

WSS.on("connection",(ws)=>{
    console.log("you  are connected//")
    ws.on("message", (data)=>{
            
        WSS.clients.forEach((client)=>{
            client.send(data)
         })
    })
})