// Balance paranthesis

let str = "[{()}]"
let stk = []

for(let i=0;i<str.length;i++){

    if(stk.length==0){
        stk.push(str[i])
    }
     else if((stk[stk.length-1]=="{" && str[i]=="}") ||
            (stk[stk.length-1]=="(" && str[i]==")")||
            (stk[stk.length-1]=="[" && str[i]=="]")){

                stk.pop()
        }  
    else{
        stk.push(str[i])

    }
}        
if(stk.length ==0){
    console.log("the parenthesis is balanced")
}
else{
    console.log("the parenthesis is not balanced")
    
}