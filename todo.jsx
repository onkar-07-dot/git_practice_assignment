import react from 'react'
import TodoInput from './todo_input'
import TodoList from './todo_list'
import {useState} from 'react'

const Initdata = [
    { id : 1 , title : 'learn react' , status : false},
    { id : 2 , title : "learn typeScript" , status : false},
    { id : 3 , title :  " watch movie " , status : false}
]

const Todo = ()=>{

const [data , setdata] = useState(Initdata)
console.log(data)

const addTodos = (TodoTitle)=>{
    console.log(TodoTitle);
    const payload = {
    id : data.length+1,
    title : TodoTitle,
    status : false
}
setdata = ((prev)=>{

    return  [ ...prev ,payload]
})
};


    return (
        <div>
            <h1>TODO</h1> 
            <TodoInput addtodofn='{addTodos}' />
            <TodoList todoitems= {data}/>
        </div>
    )
}

export default Todo