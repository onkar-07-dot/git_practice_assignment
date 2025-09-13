
const fs = require("fs")

const logger = (req,res,next)=>{
    fs.appendFileSync("./appended.txt",`\n route : ${req.url} , method :${req.method}`)
    next()
}

module.exports ={

    logger
}