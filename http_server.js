
const http = require("http")
//console.log(http)

const fs = require("fs")

const server = http.createServer((req,res)=>{

       if(req.url === "/"){
        res.end("this is home page")
       }
       else if(req.url =="/data"){
        res.end("here is the data")
       }
       else if(req.url == "/posts"){
        fs.readFile("./data.json",(err,data)=>{

            if(err){
                res.write("err")
                res.end()
            }
            else{
                res.end(data)
            }
        })
       }
})

server.listen(4500,()=>{
    console.log("the server is created sucessfully ")
})