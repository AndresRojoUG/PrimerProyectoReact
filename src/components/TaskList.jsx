import React,{useContext}from 'react'
import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'
export default function TaskList() {

  const{tasks}=useContext(TaskContext)
  
  if(tasks.length===0){
    return <div className='text-white text-center text-4xl font-bold'>No Tasks</div>
  }

  return (
    <div className='grid grid-cols-4 gap-2'>{
      tasks.map((task)=>(
      <TaskCard key={task.id} task={task} />
      ))
    }
    </div>
  )
}
