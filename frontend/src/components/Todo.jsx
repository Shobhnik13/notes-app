import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
const Todo = (props) => {
  return (
    <li className='flex justify-between bg-slate-200 p-3 my-2 rounded-sm'>
        <div className="row flex">
            <input type="checkbox" className='cursor-pointer'/>
            <p className='todo-text ml-2 cursor-pointer'>{props.todo}</p>
        </div>
        <button className='trash-button flex cursor-pointer items-center'><FaRegTrashAlt /></button>
     </li>
  )
}

export default Todo