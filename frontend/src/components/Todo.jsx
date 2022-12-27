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
  <p className='todos-count'>You have 2 Todos</p>
    </li>
  )
}

export default Todo