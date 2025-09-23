
const express = require("express")
const {connection } = require("./config/db")
const {UserModel} = require("./models/model")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("this is the home page")
})

app.post("/register",async(req,res)=>{
    const payload = req.body
    try {
      const user = new UserModel(payload)
      await user.save()
        res.send("register sucessfully",user)
       
    } catch (error) {
        res.send("Error in registering user")
        console.log(error)
        
    } 

})

app.post("/login",async(req,res)=>{
    const {name , password} = req.body
    try {
        const getuser = await UserModel.find({name , password})
        const token = jwt.sign({course :"backend"}, "node")
        if(getuser.length>0){
            res.send({"message" : "login done" , "token" : token})
        }else{
            res.send("wrong credential")
        }
        
    } catch (error) {
        console.log("something went wrong")
        
    }
})

app.get("/data",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token , "node" ,(err,decode)=>{
        if(err){
            res.send("invalid token")
            console.log(err)
        }else{
            res.send("data..")
        }
    })
})

app.listen(9090,async()=>{
    try {
        await connection
        console.log("the connected to db")
        
    } catch (error) {
        
    }
    console.log("server is started")
})