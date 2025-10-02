// rat in a maze


function rat(mat,row,col,str){
    if(row<0 ||row>= mat.length ||col< 0 ||col>=mat.length||mat[row][col]==0){
        return
    }
    if(row == mat.length-1 && col ==mat[0].length-1){
        console.log(str)
        return
    }
    mat[row][col] = 0;
    rat(mat,row-1,col,str+"U");
    rat(mat,row+1,col,str+"D")
    rat(mat,row,col-1,str+"L")
    rat(mat,row,col+1,str+"R")
    mat[row][col] = 1
}
let matrix = [[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]]
console.log(rat(matrix,0,0,""))