// given an character from a to z , you have to find the how many by using character you can make the string mouse.


let obj={}

let str="mouse"

let str1="mouseeemos"

for(let i=0;i<str.length;i++){

   if (obj[str[i]]==undefined){

    obj[str[i]]=0;
   }
}


//console.log(obj)

for(let i=0;i<str1.length;i++){
    if(obj[str1[i]]!=undefined){

        obj[str1[i]]++
    }
}

console.log(obj)

let min = obj['m']

for(let x in obj){

    if(obj[x]<min){

        min=obj[x]
       
    }
}

console.log(min)