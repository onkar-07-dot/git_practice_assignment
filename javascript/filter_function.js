// filter - inbuild function
//find the elements in the array which is event.

let arr = [ 1,2,3,4,5,6];

let new_array = arr.filter(function(item,index){

    if(item%2==0){

        return item;
    }
});

console.log(new_array);

