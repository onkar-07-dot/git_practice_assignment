
const express = require("express")
const {Sequelize, DataTypes} = require("sequelize")
const app = express()

app.use(express.json())

const sequelize = new Sequelize("students" ,"root","Onkar@2676",{

    host:"localhost",
    dialect : "mysql"
})

sequelize.authenticate().then(()=>console.log("connection successfull"))
.catch(()=>console.log("connection failed"))

const Users = sequelize.define("users",{
    id :{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,

    },
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
    email:{
        type : DataTypes.STRING,
        allowNull:false,
        unique : true
    }
})

async function fetchdata(){

    await sequelize.sync()

    await Users.destroy({
        where: {
            id:1
        }
    })

    async function insertuser(user){
        await Users.create(user)
    }

    app.post("/users",(req,res)=>{
        const user = req.body
        insertuser(user)
        res.send("data is added")
    })
    const data = await Users.findAll()
   console.log(data)
    .then(()=>{

        Users.bulkCreate([{
            id : 201,
            name : "pushkar",
            email:"push@gmail.com"

        },{
            id:202,
            name: "shri",
            email:"shri@gmail"
        },
        {
            id:203,
            name : "samu",
            email : "samu@gmail.com"
        }
    ]).then(()=>console.log("data created successfully"))
    })
    .then((data)=>console.log(data))
}

fetchdata()
sequelize.sync().then(()=>{

    Users.create({id:"100", name:"onkar",email:"onkar@gmail"})

}).then(()=>console.log("user created successfully"))
.catch(()=>console.log("failed to create data"))

app.listen(5000,()=>{
    console.log("server started")
})



