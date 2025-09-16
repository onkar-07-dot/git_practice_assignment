

function appointment(queue,arr){
    let step = 0
    let obj = {}
    for(let i =0 ; i<arr.length ;i++){

        let index = 0
        let count = 0


        while(arr[index]!==queue[i]){
            if(obj[arr[index]]==undefined){
                count++
            }
            index++
        }

        step = step +count +1
        obj[queue[i]]=1
    }

    console.log(step-1)
}

let arr = ["A","B","C","D"]
let queue = ["B","C","A","D"]

appointment(queue, arr)
