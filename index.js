
const exp = require("express")
const fs = require("fs")
const app = exp()
const cors = require("cors")
const {watchman} = require("./watchman_mid")
const {timelogger} = require("./timelogger_mid")
const {logger} = require("./logger")
const {details} = require("./add_details")
const {studentrouter} = require("./student_router")
const {teacherrouter} = require("./teacher_router")


// app.use(watchman)
// app.use(timelogger)

app.use(cors())
app.use(logger)
//app.use(details)
app.use(exp.json())
app.use("/student",studentrouter)
app.use("/teacher",teacherrouter)

app.post("/add",(req,res)=>{
    console.log(req.body)
    res.send("added sucessfully")
})

app.get("/",(req,res)=>{
    res.send("this is the home page")
})


app.get("/contact",(req,res)=>{
    res.send("this is the contact page")
})


app.get("/data",(req,res)=>{
    res.send("this is the data page")
})


app.get("/about",(req,res)=>{
    const data = fs.readFileSync("./dummy.txt","utf-8")
    res.send(data)
    res.send("this is the about page")
})


app.listen(3500,()=>{
    console.log("server is started")
})


