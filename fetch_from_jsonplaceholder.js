

const express = require("express")
//import fetch from 'node-fetch';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express()
//


app.get("/",(req,res)=>{    
    res.send("this is home page")
})

app.get("/users",async(req,res)=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users =await response.json()
    res.send(users)
})


app.listen("3000",()=>{
    console.log("the port is started")
})
