import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
const dummyclass={
    li:`flex justify-between bg-slate-200 p-3 my-2 rounded-sm`,
    liCompleted:`flex justify-between bg-slate-400 p-3 my-2 rounded-sm`
}
const Todo = ({todo,toggleCompleted,deleteTodo}) => {
  return (
    <li className={todo.completed ?dummyclass.liCompleted :dummyclass.li}>
        <div className="row flex">
            <input onChange={()=>toggleCompleted(todo)} type="checkbox" className='cursor-pointer' checked={todo.completed ? 'checked' :''}/>
            {todo.completed ? <p onClick={()=>toggleCompleted(todo)} className='todo-text ml-2 cursor-pointer line-through'>{todo.text}</p>:<p onClick={()=>toggleCompleted(todo)} className='todo-text ml-2 cursor-pointer '>{todo.text}</p>}
        </div>
        <button onClick={()=>deleteTodo(todo)} className='trash-button flex cursor-pointer items-center'><FaRegTrashAlt /></button>
     </li>
  )
}

export default Todo