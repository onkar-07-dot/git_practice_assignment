

function findmid(){
    
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]



for(let i=0;i<arr.length;i++){
    let j=i+2
        
    if(arr.length%2==0){

    
        let ans = arr.length /2
        return arr[ans]
            
        }
    

     else{

        let ans2 = Math.floor(arr.length/2)
        return arr[ans2]
    }
}
    }



console.log(findmid())