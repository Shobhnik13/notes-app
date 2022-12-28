import { useState,useEffect } from 'react'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './components/Todo';
import {db} from './firebase'
import {query,collection, onSnapshot, updateDoc, doc, deleteDoc, addDoc} from 'firebase/firestore'
function App() {
  //creating a new state for changing todos named todos
  const [todos,setTodos]=useState([])
  
  //CRUD
//create todo
//read todo from firebase
useEffect(()=>{
  //running a query on the collection in our database named todos const q=query(collection(db,'todos'))
const q=query(collection(db,'todos'))
const unSubscibe=onSnapshot(q,(querySnapshot)=>{
let todosArr=[]
querySnapshot.forEach((doc)=>{
  todosArr.push({...doc.data(),id:doc.id})
})
setTodos(todosArr)
})
return ()=>unSubscibe
},[])
//update todo to firebase
const toggleCompleted=async (Todo)=>{
await updateDoc(doc(db,'todos',Todo.id),{
  completed:!Todo.completed
})
}
//delete todo
const deleteTodo=async (dummyTodo)=>{
  await deleteDoc(doc(db,'todos',dummyTodo.id))
}
//add todo
//creating a state for the text in input 
const [inp,setInp]=useState('');
//preventing the reload when we add input/todo
const addTodo=async (e)=>{
e.preventDefault()
if(inp===''){
  alert('Please enter a valid todo')
}
addDoc(collection(db,'todos'),{
  text:inp,
  completed:false,
})
setInp('')
}
  return (
    <div className="App h-[100vh] w-[100vw] bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] p-5">
      <div className="container bg-slate-100  max-w-[500px] w-full m-auto rounded-lg p-4 shadow-xl">
      <h1 className="heading text-3xl text-center font-bold p-2">Todo App</h1>
      <form action="" onSubmit={addTodo} className='form flex justify-between '>
        <input value={inp} onChange={(e)=>setInp(e.target.value)} type="text" placeholder='Add todo' className='text-input rounded-md p-2 text-xl border w-full'/>
        <button className='plus-button border p-2 ml-2 bg-purple-500 text-slate-100'><AiOutlinePlus size={35} /></button>
      </form>
      <ul className='list'>
        {todos.map((item,index)=>{
    return <Todo key={index} todo={item} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
  })}
      </ul>
      {todos.length>=1 && <p className='todos-count text-center p-1 font-semibold'>You have <span className='text-green-600 text-xl font-semibold'>{todos.length}</span> Todos</p>}
      </div>
      </div>
  )
}

export default App
