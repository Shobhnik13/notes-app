import { useState,useEffect } from 'react'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './components/Todo';
function App() {
  //creating a new state for changing todos named todos
  const [todos,setTodos]=useState(['Start DSA grind','Learn React'])
  //mapping state with compnents for passing the todo props in todo component
  const todosArray=todos.map((item,index)=>{
    return <Todo key={index} todo={item}/>
  })
  return (
    <div className="App h-[100vh] w-[100vw] bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] p-5">
      <div className="container bg-slate-100  max-w-[500px] w-full m-auto rounded-lg p-4 shadow-xl">
      <h1 className="heading text-3xl text-center font-bold p-2">Todo App</h1>
      <form action="" className='form flex justify-between '>
        <input type="text" placeholder='Add todo' className='text-input rounded-md p-2 text-xl border w-full'/>
        <button className='plus-button border p-2 ml-2 bg-purple-500 text-slate-100'><AiOutlinePlus size={35} /></button>
      </form>
      <ul className='list'>
        {todosArray}
      </ul>
      <p className='todos-count text-center p-1 font-semibold'>You have <span className='text-green-600 text-xl font-semibold'>2</span> Todos</p>
      </div>
      </div>
  )
}

export default App
