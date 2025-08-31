// if there is consecative letters then take it only once


let st = " abb";
let emp = ""
for(let i =0 ; i<st.length;i++){

    //console.log(st[i]);

    if(st[i]==st[i+1]){
    

       continue;
    }

    emp += st[i];
}

console.log(emp);