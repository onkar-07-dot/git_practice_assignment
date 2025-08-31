// the function inside the other function is high order function


function dobrush(){

    console.log("Brush your teeth first")

}


function eat(item,time){

    dobrush()

    console.log("Im eating "+item+" at  "+time)
}

eat("poha",9)