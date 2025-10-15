
function check(s,t){

    if(s.length !== t.length){
        return false
    }

    let a = {} , b = {}
    for(let i=0;i<s.length;i++){

        let cs = s[i] , ct = t[i]
        if((a[cs] || "") !==(ct)&& a[cs] !== undefined){
            return false
        }

        if((b[ct] || "") !==(cs) && b[ct] !== undefined){
            return false
        }

        a[cs] = ct
        b[ct] = cs
    }

    return true
}


console.log(check("egg" ,"add"))
console.log(check("for" , "doo"))