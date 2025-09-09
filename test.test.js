

import { add, sub,obj,text} from "./test.mjs"

describe("add func",function(){
    test("function is called with 2 and 3" , function(){

    expect(add(2,3)).toBe(5)
})

test("function is called with 2 and 3" , function(){

    expect(add(10,3)).toBe(13)
})

})


describe("func call" , function(){
    
test("function is called with 2 and 3" , function(){

    expect(sub(10,3)).toBe(7)
})

test("function is called with 2 and 3" , function(){

    expect(sub(3,3)).toBe(0)
})
})

test("obj is invoked",function(){

    expect(obj()).toEqual({name:"onkar"})
})

test("text will return ",function(){

    expect(text()).toMatch("onkar")
     expect(text()).toMatch(/my../i)
})

test("chck with obj",function(){
    let std1={

        name:"onkar"
    };

    let std2 ={

        name:"onkar",
        sub:"js"
    }

    expect(std2).toMatchObject(std1)
})