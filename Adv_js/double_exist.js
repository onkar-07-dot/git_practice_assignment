
let arr =[10,6,4,4]

function IsDouble(){

for(let i=0;i<arr.length;i++){

    for(let j=0;j<arr.length;j++){

        if(i==j){
            continue;
        }
        if(arr[i]==arr[j]*2){
            return true
        }
    }
   
}
 return false

}
console.log(IsDouble())

