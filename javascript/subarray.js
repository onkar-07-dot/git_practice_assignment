//there is two teams , given an array of n interger , and the length is 2n ,
//  find the absolute diff between both the teams and  if it is less than equal to k then print valid


let arr = [1,2,3,4,5,6]
let sum = 0;
let sum1 =0; 
let k =2

for(let i=0;i<=2;i++){
         
    sum =sum+arr[i];


}
console.log("sum of first team :",sum);

for(let j =3;j<arr.length;j++){


    sum1=sum1+arr[j];

}
console.log("sum of second team :",sum1);

let abs = sum-sum1;
if(abs<0){

    abs = abs *-1;
}

console.log("absolute diffenece",abs);

if(abs<k){

    console.log("valid");
}
else{
    console.log("invalid");
}