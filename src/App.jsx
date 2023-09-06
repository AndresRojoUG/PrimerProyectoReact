import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App(){
 
 
  

  return (
  <main className='bg-zinc-900 h-screen relative'>
    <div className='container mx-auto'><TaskForm/>
    <h1><TaskList/></h1></div>
  
  </main>
  )
}

export default App