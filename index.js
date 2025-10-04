
const express = require("express")
const {Server} = require("socket.io")
const app = express()
const http = require("http")

const httpserver = http.createServer(app)

app.get("/",(req,res)=>{
    res.sendend("this is home page")
})

app.get("/about",(req,res)=>{
    res.sendend("this is about page")
})


httpserver.listen(8080)
const io = new Server(httpserver)
let count = 0
let seat = 10
io.on("connection" , (socket)=>{
    console.log("client connected")
    socket.emit("message","welcome to the socket server")
    socket.emit("greeting","here is your welcome kit")
    socket.on("hello",(msg)=> console.log(msg))
    socket.emit("online",count++)
    socket.broadcast.emit("info","we have new user in the town")

    socket.on("disconnect",()=>{
        count --;
        socket.broadcast.emit("online",count)
    })

    io.emit("announcement",`hey we have only ${seat-count} left`)
})

