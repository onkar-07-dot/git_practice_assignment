

function hani(x){

    if(x<1){
        return 1
    }
    else{
        return hani(x-1)+bani(x)
    }
}

function bani(x){
    if(x<2){
        return 1
    }
    else{

        return hani(x-1)+(x/2)
    }
}

console.log(hani(4))