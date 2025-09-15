
const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    res.send("this is home page")
})


app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.get("/data",(req,res)=>{
    //res.send("this is about page")
   
    const data ={
        banglore : 23,
        mumbai : 22,
        pune : 23,
    }

    const {city} = req.query
    res.send(`temprature of the ${city} is the ${data[city]}`)

    
})

  app.get("/student/:roll_no",(req,res)=>{

        const roll_no = req.params.roll_no
        res.send(`data of students with the roll no ${roll_no}`)
    })



app.listen(3000,()=>{
    console.log("server started successfully")
})