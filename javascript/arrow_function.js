// 


let add = (a,s,d)=>{

    console.log(a+s+d)
}

add(10,20,40)


let arr = [1,2,4,6,7,8]
let func =(arr)=>{

    let new_arr = arr.filter((item,index)=>{

        return item%2==0
    })
    console.log(new_arr)
}

func(arr)
