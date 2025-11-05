
const express = require("express")
const Sequelize = require("sequelize")
const app = express()
app.use(express.json())

const seq = new Sequelize("admission" , "root" , "Onkar@2676",{

    host : "localhost",
    dialect : "mysql"

})

const students = seq.define("students",{
    name : Sequelize.STRING , 
    email : Sequelize.STRING,
    age  : Sequelize.INTEGER

})

app.post("/api/create",async (req,res)=>{

    const {name , email , age} = req.body
    try {

        const data = await students.create({
            name ,
            email , 
            age
        })

        res.send("data created successfully")
        res.status(200)
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
})

app.get("/api/getdata" , async (req,res)=>{

    const data = await students.findAll()
    res.send(data)
})

seq.sync().then(()=>{
    app.listen(3000,()=>{
    console.log("the server is started at 3000")
})
})
