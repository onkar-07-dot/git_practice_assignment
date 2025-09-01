

let squreroot = function(num){

     return new Promise(function(res,rej){
   
        let sqrt = Math.sqrt(num)

        if(sqrt){
            return res(sqrt)
        }

        else{
            return rej("invalid")
        }
   
    })
}

squreroot(-10)
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})