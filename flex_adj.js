
function flex(arr,n){

    let l =0; 
    let r = n-1
    
    let max = null

    while(l<r){
        let width = r-l
        let area = Math.min(arr[l],arr[r])*width

        if(area > max || max==null){

            max=area
        }

        if(arr[l]<arr[r]){
            l++
        }
        else{
            r--
        }
    }
    console.log(max)

}
flex([1,8,6,2,5,4,8,3,7],9)