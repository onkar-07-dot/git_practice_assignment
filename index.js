

const data = require("fs")
 data.readFile("./text.txt",{encoding:"utf-8"},(err,res)=>{

    if(err){

        console.log("cannot read file")
        console.log(err)
    }
    else{
        console.log(res)
    }
 })
 console.log("hello wolrd")

 let data2 =data.readFileSync("./text.txt",{encoding:"utf-8"})
 console.log(data2)
 console.log("hello world")

 let write = data.writeFile("./text2.txt","this is second line",(err)=>{

    if(err){
        console.log("not able to learn")
    }
    else{
        console.log("written sucessfully")
    }
 })

 let write2 = data.writeFileSync("./text2.txt","this is third line")
 console.log(write2)