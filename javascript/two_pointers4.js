//remove duplicates  from the sorted array

let arr1=[1,1,1,2,2,3,3,3,4,5,6,7]

let j=0;
let n=arr1.length

for(let i=0;i<arr1.length-1;i++){

    if(arr1[i]!=arr1[i+1]){

        arr1[j]=arr1[i]
        j++
    }
}
arr1[j]= arr1[n-1]
for (let i = 0; i <= j; i++) {
    console.log(arr1[i]);
}


