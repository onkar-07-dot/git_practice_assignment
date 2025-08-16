//  find the longest substring without duplicate


function longestsub(){

let str = ["a" , "b" ,"b","c" ,"d","e", "a" ,"g","b"]

let start =0
let max = 0
let obj={};

for(let i=0;i<str.length;i++){

    if(obj[str[i]]){

        start = Math.max(start , obj[str[i]]+1)
    }

    obj[str[i]]= i;
    max = Math.max(max,i-start+1)

}
return max
}


console.log(longestsub())