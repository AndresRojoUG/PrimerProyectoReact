

import React, { useContext } from 'react'
import {TaskContext} from '../context/TaskContext'
export default function TaskCard({task}) {
  const {deleteTask}=useContext(TaskContext)
  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
    <h1 className=' text-lg font-bold capitalize'>{task.title}</h1>
    <p className='text-gray-500 text-sm'>{task.description}</p>
    <button className='bg-red-700 px-2 rounded-md mt-4 hover:bg-red-300' onClick={()=>{deleteTask(task.id)}}>Eliminar tarea</button>
  </div>
  )
}
