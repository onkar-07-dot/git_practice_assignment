// Bubble sort


function bubblesort(arr,n){


    for(let i=0;i<=n-2;i++){

       for(let j=0;j<=n-i-2;j++){

          if(arr[j]>arr[j+1]){
        
                let temp
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                
            }  
      
        }
     return(arr) 
    }
}

console.log(bubblesort( [1,3,7,4,9,5,2],7))



   