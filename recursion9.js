// generate all the subsequences

function generate(str,new_str,pos){

    if(new_str.length != 0){
        console.log(new_str.join(""))
    }
    if(str.length == pos){
        return
    }
    for(let i = pos ; i<str.length;i++){
        new_str.push(str[i])
        generate(str,new_str,i+1)
        new_str.pop()
    }
}

generate("abcd",[],0)