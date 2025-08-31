  // find the elements who occured once


  let arr =  [ 1,3,5,6,7,8,1,2,3];
 


  let obj ={};

  for(let i = 0 ; i<arr.length ; i++){

    if(obj[arr[i]]==undefined){

        obj[arr[i]]=1
    }

    else{

        obj[arr[i]]++;
    }
}

console.log(obj);

for( key in obj){

    if(obj[key]==1){

        console.log(key);
    }
}