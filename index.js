
const {WebSocketServer} = require("ws")

const wss = new WebSocketServer({port:9000})

wss.on("connection" , (socket)=>{
    console.log("got new connection")
    socket.send("hello from the server")
   socket.onmessage = (event)=> {console.log(event.data)

   if(event.data == "hello from client"){
    socket.send("how are you")
   }}
    socket.onclose = ()=> console.log("connection disconnected")
})