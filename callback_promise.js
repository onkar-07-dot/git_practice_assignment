


let squreroot = function(num ,cl1,cl2){

     return new Promise(function(res,rej){
   
        let sqrt = Math.sqrt(num)

        if(sqrt){
            return cl1(sqrt)
        }

        else{
            return cl2("invalid")
        }
   
    })
}

squreroot(4,(data)=>{console.log(data)},(err)=>{console.log(err)})