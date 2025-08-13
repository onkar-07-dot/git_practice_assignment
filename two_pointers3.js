// given a two sorted array with same size , merge the two array in one array in the sorted format



let arr1=[1,4,6,11,88]
let arr2=[2,5,9,13,84]

let n1= arr1.length
let n2 = arr2.length

let arr3 = new Array(n1+n2)
//console.log(arr3)
let k=0 ,i=0 ,j=0

// for(let i=0;i<n1;i++){

//     for(let j=0;j<n2;j++){

while(i<n1 && j<n2 ){

        if(arr1[i]<arr2[j]){
            arr3[k]=arr1[i]
            i++;
            k++;
            
        }

        else{

            arr3[k]=arr2[j]
            j++;
            k++;
            
        }
        
        
    }
    while (i < n1) {
    arr3[k] = arr1[i];
    i++;
    k++;
}
while (j < n2) {
    arr3[k] = arr2[j];
    j++;
    k++;
}
    

console.log(arr3)