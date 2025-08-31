  
 // check the frequency of the character in the string.
 
 //let arr = [ 1, 2 ,3 ,3 , 4, 4, 5]
  
  let st = "chunnu";

 let obj ={};

 for( let i = 0 ; i<=st.length-1;i++){

    if(obj[st[i]]== undefined){

        obj[st[i]]=1;
    }
    else{

        obj[st[i]]++
    }
 }
 console.log(obj);