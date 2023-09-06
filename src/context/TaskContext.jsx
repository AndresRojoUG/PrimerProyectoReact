
import {createContext,useState,useEffect} from 'react'
import {tasks as data} from '../data/Tasks'

export const TaskContext=createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])
    function deleteTask(taskId){
        setTasks(tasks.filter(task=>task.id!==taskId))
        }
    function createTask(task){
        setTasks([...tasks,{
          title:task.title,
          id:tasks.length,
          description:task.description
        }])
      }
      useEffect(()=>{
        setTasks(data)
      },[])
    
  return (
   <TaskContext.Provider value={{
    tasks,
    deleteTask,
    createTask
   }}>
    {props.children}
   </TaskContext.Provider>
  )
}
