// generate permutation 

function permutation(arr,index){

    if(index == arr.length-1){
        var temp =[]
        for(let i =0 ;i<arr.length;i++){
            temp.push(arr[i])
        }
        ans.push(temp)
        return
    }

    for(let i = index ; i<arr.length ; i++){
        swap(arr,index,i)
        permutation(arr,index+1)
        swap(arr,index,i)
    }

    function swap(arr,i,j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

var arr = [1,2,3]
var ans = []
permutation(arr,0)
ans.sort()
console.log(ans)