let arr = [
    [0,4,0,0,0,0,1,7,9],
    [0,0,2,0,0,8,0,5,4],
    [0,9,6,0,0,5,0,0,8],
    [0,8,0,0,7,0,9,1,0],
    [0,5,0,0,9,0,0,3,0],
    [0,1,9,0,6,0,0,4,0],
    [3,0,0,4,0,0,7,0,0],
    [5,7,0,1,0,0,2,0,0],
    [9,2,8,0,0,0,0,6,0]
];
sodukusolver(arr,0,0)

function sodukusolver(board,row,col){
    if(row==board.length){
        printboard(board)
        return
    }

    let next_row = 0;
    let next_col = 0;
    if(col ==board.length-1){
        next_row = row+1
        next_col = 0
    }

    else{
        next_col = col+1
        next_row = row
    }
    if(board[row][col]!= 0){
        sodukusolver(board,next_row,next_col)

    }
    else{
        for(let i =1 ;i<=9;i++){
            if(checksafe(board,row,col,i)==true){
                board[row][col] = i
                sodukusolver(board,next_row,next_col)
                board[row][col] = 0
            }
        }
    }
}

function checksafe(arr,row,col,value){

    for(let i=0;i<arr.length ; i++){
        if(arr[i][col] == value)return false
    }

    for(let i = 0;i<arr.length;i++){
        if(arr[row][i]==value)return false
    }

    let start_row = Math.floor(row/3)*3
    let start_col = Math.floor(col/3)*3
    for(let i =start_row;i<start_row+3;i++){
    for(let j = start_col; j<start_col+3;j++){
        if(arr[i][j]==value)return false
    }
    }
    return true
}

function printboard(board){
    for(let i=0 ;i<board.length;i++){
        console.log(board[i].join(" "))
    }
}


