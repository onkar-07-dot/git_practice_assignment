// Timers and Inetrvals

console.log("a")

setTimeout(()=>{
    console.log("b")
},1000)

setTimeout(()=>{
    console.log("d")
},0)

let x= setInterval(()=>{
    console.log("Interval")
    clearInterval(x)
},2000)

setImmediate(()=>{
    console.log("Immediate")
})

process.nextTick(()=>{
    console.log("next tick")
})
console.log("c")


const fs = require("fs")

fs.readFile("data.json","utf-8",(err,res)=>{
    console.log(res)
    fs.unlinkSync("data.json")
})