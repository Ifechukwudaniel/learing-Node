const WS = new WebSocket("ws://localhost:3000")

const handleSubmit =()=>{
    let message = document.getElementById("message").value
   //  console.log(message)
    WS.send(message)
}
