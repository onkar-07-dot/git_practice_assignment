
const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/superheros")

const heroschema = mongoose.Schema({

    name : String,
    city : String,
    villan : String,
    language : String,
    power : Number
 })

 const  HeroModel = mongoose.model("heroe",heroschema)

module.exports = {
    connection,
    HeroModel

}

