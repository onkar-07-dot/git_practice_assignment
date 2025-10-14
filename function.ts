

function sum(a:number,b:number) : number{
    return a+b
}

sum(12,13)

let arr : number[] = [1223,34,4,5,5,6,7,7,45]

let arr1 :number[] | undefined[] 
let arr2 : Array<number | undefined> = [12,23,4,5,556,667]
let arr3  : (number | string)[] = [122,34,45,"asdf","23434"]


let obj : {

    id: number;
    name?: string;
} = {
    id :23,
    name : "onkar"
}

obj={
    id : 2,
    
}

let obj2 : {

    [x:string] : string
} = {

    abdbd : "nfnjf" , 2343:"dsfdcvfd"
}

export type users ={
    id : number ;
    name : string

}

let obj4 : users = { id : 12 , name : "Ibahsd"}

enum status {
     live = "live",
     suspend = "suspend"

}

let abd : status= status.live


let tuple : [string , string] = ["12","223"]

let tuple2 : Array<[string,string]> = [["12","23"],["23","34",]]

let tuple_3 : Array<Array<string>> = [[]]