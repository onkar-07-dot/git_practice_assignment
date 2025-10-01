
const express = require("express");
const { Body } = require("node-fetch");
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get("/",(req,res)=>{
    res.send("this is the home page")
})

CLIENT_ID = "Ov23lismJhnldTqRRCxz"
CLIENT_SECRET = "1aee1af8d95f34b6ead9b3871df3e8b54d74fbaf"

app.get("/login",(req,res)=>{

    res.sendFile(__dirname + "/index.html")
})

app.get("/oauth/github",async(req,res)=>{

    const {code} = req.query
    console.log(code)

    const access_token = await fetch("https://github.com/login/oauth/access_token",{
        method : "POST",
        headers :{
                "Content-type":"application/json",
                Accept:"application/json"
            },
        body : JSON.stringify({
            client_id :CLIENT_ID,
            client_secret : CLIENT_SECRET,
            code : code
        }),
    }).then((res)=>res.json())
    .catch((err)=>console.log(err))
    console.log(access_token)

    const get_details = await fetch("https://api.github.com/user",{
        headers :{

            Authorization: `Bearer ${access_token.access_token}`
        }
    }).then((res)=>res.json())
    console.log(get_details)

    res.send("sign up in progress")
})

app.listen(9090,()=>{
    console.log("the port is started")
})