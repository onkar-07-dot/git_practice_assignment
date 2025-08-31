 
 let obj = {

    "a":1,
    "e":1,
    "i":1,
    "o":1,
    "u":1
 };


 //let obj1={};

 //console.log(obj.a);
let str = "nature";

for(let i =0 ; i<str.length;i++){

    for(let j in obj){

       // console.log(j)
    if(str[i]==j){

        delete j;
       
}
 console.log(obj);
    
}  
}
