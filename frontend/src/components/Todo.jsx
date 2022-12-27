import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
const dummyclass={
    li:`flex justify-between bg-slate-200 p-3 my-2 rounded-sm`,
    liCompleted:`flex justify-between bg-slate-400 p-3 my-2 rounded-sm`
}
const Todo = (props) => {
  return (
    <li className={props.todo.completed ?dummyclass.liCompleted :dummyclass.li}>
        <div className="row flex">
            <input type="checkbox" className='cursor-pointer' checked={props.todo.completed ? 'checked' :''}/>
            {props.todo.completed ? <p className='todo-text ml-2 cursor-pointer line-through'>{props.todo.text}</p>:<p className='todo-text ml-2 cursor-pointer '>{props.todo.text}</p>}
        </div>
        <button className='trash-button flex cursor-pointer items-center'><FaRegTrashAlt /></button>
     </li>
  )
}

export default Todo