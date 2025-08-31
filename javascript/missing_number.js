// find the missing number in the array


let arr=[1,2,3,5]
let obj={}

for(let i=1;i<=arr.length+1;i++){

    obj[i]=0
}
console.log(obj)
for(let j=0;j<arr.length;j++){
delete(obj[arr[j]])
}
console.log(obj)


