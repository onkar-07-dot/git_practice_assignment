
const mg = require("mongoose")

const main = async ()=>{
      try {

        const connection = await mg.connect("mongodb://127.0.0.1:27017/school")
        console.log("connected to the db")
        await Studentmodel.insertMany([{name:"shri",age:24,city:"sangli",is_married:false}])
        const data = await Studentmodel.find()
        console.log(data)

        console.log("data is added")
        
      } catch (error) {
        console.log("not connected to the db")
        console.log(error)
        
      }
}

main()

const studentschema = mg.Schema({

    name : String ,
    age : Number,
    city : String,
    is_married : Boolean
},{

    versionKey : false
})

const Studentmodel = mg.model("student" ,studentschema)