

function unique(arr){

    let obj ={}
    let que =[]
    let ans = []

    for(let i=0;i<arr.length;i++){

        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1
        }
        else{
            obj[arr[i]]++
        }

        que.push(arr[i])

        while(que.length!==0){
            if(obj[que[0]]==1){
                break;
            }
            que.shift()
        }
        if(que.length==0){
            ans.push("#")
        }
        else{
            ans.push(que[0])
        }
    }
    console.log(ans.join(""))
}


unique(["a","b","c","b","a"])