import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
const Todo = (props) => {
  return (
    <li>
        <div className="row">
            <input type="checkbox"/>
            <p className='todo-text'>{props.todo}</p>
        </div>
        <button className='trash-button'><FaRegTrashAlt /></button>
     </li>
  )
}

export default Todo