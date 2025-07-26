// count the number of substring which is even.
let arr = [1,2,3];

let count=0;

for(let i = 0;i<arr.length;i++){
let bag = [];

    for(let j= i ;j<arr.length;j++){
       
       
       let sum = 0;

        bag.push(arr[j])
        
        console.log(bag)

        for(let k=0;k<bag.length;k++){

            

            sum =sum+bag[k];
            
        }
        console.log(sum);

        if(sum%2==0){

              count++;
        }

    }
        
    
}

console.log(count); 