

function hack(value,amount){

    if(value == amount){
        return true
    }
    else if(value > amount){
        return false
    }
    else{
        return  hack(value*10 ,amount) || hack(value*20,amount)
    }
}

console.log(hack(10,400))
console.log(hack(20,400))