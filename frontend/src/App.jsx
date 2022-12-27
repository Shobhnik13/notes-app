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
      <div className="container">
      <h1 className="heading">Todo App</h1>
      <form action="" className='fomr'>
        <input type="text" placeholder='Add todo' className='text-input'/>
        <button className='plus-button'><AiOutlinePlus size={35} /></button>
      </form>
      <ul className='list'>
        {todosArray}
      </ul>
      </div>
      </div>
  )
}

export default App
