//given an array find out such pair exist where thier sum is equal to k

let arr =[3,7,2,6,10,1];

let k =9;

let count=0;

for(let i=0;i<=arr.length;i++){

    for(let j =i+1 ;j<arr.length;j++){


        if(arr[i]+arr[j]==k){

            console.log(arr[i],arr[j])

            count++;
            
        }
    }

    }
    console.log(count)
