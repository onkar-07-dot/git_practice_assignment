

function add(a,b ,c){
   c(a,b);
    
}

add(2,3,function(x,y){

    console.log(x+y)
})

