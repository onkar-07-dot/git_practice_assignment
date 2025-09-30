
const express = require("express")
const {connection} = require("./config/db")
const {UserModel} = require("./models/user.models")
const {authenticate} = require("./middlewares/authenticate")
const bcrypt = require("bcrypt")
const fs = require("fs")
const jwt = require("jsonwebtoken")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home page")
})

app.post("/register",async(req,res)=>{
    try {
        const {name,email,password} = req.body
        await bcrypt.hash(password,10,async(err,hash)=>{
        const user = new UserModel({
            name , email, password:hash
         })
         await user.save()
         res.send("registered")
        })
    
    } catch (error) {
        res.send("not reistered")
        console.log(error)
    }
})

app.post("/login",async(req,res)=>{
    const {name,password} = req.body

    const user = await UserModel.findOne({name})
    const hashedpass = user?.password
        bcrypt.compare(password,hashedpass ,(err,result)=>{

        if(result){
            const token = jwt.sign({userID : user._id},"SECRET")
            res.send({"msg":"login successfully" , token})
        }   
        else{
            res.send("login failed")
            console.log(err)
        }
    }) 
})

app.get("/report",authenticate,(req,res)=>{

    res.send("here is the all reports")
})


app.get("/logout",(req,res)=>{

    const token = req.headers.authorization?.split(" ")[1]
    const blacklisttoken = JSON.parse(fs.readFileSync("./blacklist.json","utf-8"))
    blacklisttoken.push(token)
    fs.writeFileSync("./blacklist.json",JSON.stringify(blacklisttoken))
    res.send("logged out successfully")

})

app.listen(5000,async()=>{
    try {
        await connection;
        console.log("connected to the DB")
        
    } catch (error) {
        console.log("failed to connect to the DB")
        console.log(error)
        
    }
    console.log("port is started successfully")
})

