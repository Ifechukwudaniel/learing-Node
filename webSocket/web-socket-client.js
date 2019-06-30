const WS = new WebSocket("ws://localhost:3000")

WS.onmessage= (payload)=>{
  AddMessage(payload.data)
}
WS.onopen= ()=>{
    DisplayTitle("CONNECTED TO SERVER")
}
WS.onclose= ()=>{
    DisplayTitle("DISCONNECTED FROM SERVER")
}


const handleSubmit =()=>{
    let message = document.getElementById("message").value
   //  console.log(message)
    WS.send(message)
}

const DisplayTitle= ( title)=>{
    document.querySelector("h1").innerHTML = title
}

const AddMessage = title =>{
    let h1 = document.createElement("p")
    h1.innerHTML= title
    document.querySelector("div.message").append(h1)
}