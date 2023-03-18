import { useState } from 'react'
import './App.css'
import Task from './Task'

function App() {
  const [count, setCount] = useState(0)
  const [newEntry, setNewEntry] = useState("")
  const [tasks, setTasks] = useState([])

  return (
    <div className="container">
      <h1>React To-Do App</h1>
      <div className="d-flex gap-3">
        <input type="text" placeholder="New Task" className="flex-fill" value={newEntry} onChange={(e) => setNewEntry(e.target.value)}></input>
        <button className="btn btn-primary" onClick={() => setTasks([...tasks, newEntry])}>Submit</button>
      </div>
      <p>New task is {newEntry}</p>
      <h2>Current Tasks</h2>
      <div className="d-flex flex-column gap-1">
        {tasks.map((task) => <Task title={task}></Task>)}
      </div>
      
    </div>
  )
}

export default App
