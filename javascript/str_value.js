// given an string , find the value0 for the string and calculate the sum
// a= 1 , b=2 , c=3 ..... z=26

function val(str){
//let str= "abc"
let sum=0
let char ="abcdefghijklmnopqrstuvwxyz"
let diary={}

//for(let i=0;i<str.length;i++){

    for(let j=0;j<26;j++){

       diary[char[j]]=j+1
    }
//}
for(let i=0;i<str.length;i++){

    sum+=diary[str[i]]
}

console.log(sum)
}


val("masai")
val("abcd")
val("onkar")
