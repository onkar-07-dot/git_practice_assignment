//given an array find out such pair exist where thier diff  is less than  equal to k


let arr =[5,7,10,20,14]

let k = 4
let count=0;

for(let i=0 ; i<arr.length;i++){

    for(j=i+1;j<arr.length;j++){

        if(arr[j]-arr[i]>=0 && arr[j]-arr[i]<=k  ){

            console.log(arr[i],arr[j])
            count++
        }
    }
}
console.log(count);