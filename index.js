const express = require("express")
const app = express()
const winston = require("winston")
const expressWinston = require("express-winston")



const logger = winston.createLogger({
    level : "info",
    transports :[
        new winston.transports.File({filename:"app.log",level:"info",Timestamp : Date.now}),
        new winston.transports.File({filename:"error.log",level:"error",Timestamp : Date.now}),
        new winston.transports.File({filename:"warn.log",level:"warn",Timestamp : Date.now})
    ],
});

app.get("/",(req,res)=>{
    res.send("success")
    console.log("entry point of server")
})

app.get("/warning",(req,res)=>{
    logger.log("warn","logging a warning message")
    res.send("this is warning msg")
})

app.get("/error",(req,res)=>{
    logger.log("error","logging a error message")
    res.send("this is error msg")
})


app.listen(9000,()=>{
    console.log("the port is started on 9000");
    logger.log("info","application start on port 9000")
})