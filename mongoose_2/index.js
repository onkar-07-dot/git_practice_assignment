
const express = require("express")
const {connection , HeroModel} = require("./db")
const app = express()

app.use(express.json())


app.get("/",(req,res)=>{

    res.send("Welcome to the home page")
})

app.get("/heros",(req,res)=>{

    res.send("here is data of all heros")
})

app.post("/data",async(req,res)=>{

    const data = req.body
    const hero1 = new HeroModel(data)
    await hero1.save()
   // console.log(hero1)
    res.send("data is added")
})

app.get("/heroesdata",async (req,res)=>{

    const query = req.query
    const data = await HeroModel.find(query)
    res.send(data)
})

app.patch("/edit/:id",async(req,res)=>{

    const id = req.params.id
    const payload = req.body
    try {
        await HeroModel.findByIdAndUpdate({_id : id }, payload)
        res.send("updated")
        console.log(`update the given ${id}`)
        
    } catch (error) {
        console.log(error)
        
    }
})

app.listen(5000 , async ()=>{
    try {
         await connection
        console.log("server is started")
        
    } catch (error) {

        console.log("error")
        console.log(error)
        
    }
})
