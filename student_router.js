

const express = require("express")
const studentrouter = express.Router()

studentrouter.get("/",(req,res)=>{
    res.send(
        {
  
  "name":"onkar",
  "city":"sangli"
}
    )
})

studentrouter.post("/addstudent",(req,res)=>{
    console.log(req.body)
    res.send("added sucessfully")
})


module.exports={

    studentrouter
}