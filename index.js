

const exp = require("express")
const app = exp()
const fs = require("fs")
app.use(exp.json())

app.get("/",(req,res)=>{

    res.end("Hello from the server")
})

app.get("/data",(req,res)=>{

    res.end("data will be sent")
})

app.post("/adddata",(req,res)=>{

    console.log(req.body)
    res.end("data has been recorded")
})

app.put("/adddata",(req,res)=>{

    console.log(req.body)
    res.end("this is put command")
})

app.patch("/adddata",(req,res)=>{
    res.end("id: 12")
})

// app.delete("/adddata",(res))

app.get("/getalldata",(req,res)=>{
    const data =fs.readFileSync("./db.json","utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.id)
    res.send(parse_data.id)
})


app.post("/getalldata",(req,res)=>{
    const data =fs.readFileSync("./db.json","utf-8")
    const parse_data = JSON.parse(data)
    parse_data.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(parse_data),"utf-8")
   // console.log(parse_data.title)
    res.send("data added")
})

app.listen(3000,()=>{
    console.log("port created sucessfully on port 3000 ")
})