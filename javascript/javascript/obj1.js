 //  to sum of the numbers in the array who occured more than 1.

 let arr = [ 1,2,3,1,2,4,5];

 let obj ={};
 let sum =0 ;

 for(let i = 0 ; i<arr.length;i++){

    if(obj[arr[i]]==undefined){

        obj[arr[i]] = 1 ;
        console.log(obj[arr[i]] );
    }

    else{

          obj[arr[i]]++;
    }

    
 }

 console.log(obj);


 for(let key in obj){

    if(obj[key]==2){

        console.log(key);

        sum = sum + Number(key);
    }
 }

 console.log(sum);

