
let mat = [["a" , "b", "a", "c"],
           ["s" , "d", "l", "k"],
           ["b" , "b", "b", "b"],
           ["z" , "x", "a", "b"]]

function solve(mat , str){
    let n = mat.length 
    let m = mat[0].length
    
    for(let i=0 ;i<str.length;i++){
        let  row_number =i%n
        let found = false
    

    for(let j=0;j<m;j++){
        if(mat[row_number][j]==str[i]){
            found = true
            break
        }
    }
    if(found == false){
        return false
    }
}
    return true
}
console.log(solve(mat , "adbxakb"))
console.log(solve(mat , "adbxakz"))