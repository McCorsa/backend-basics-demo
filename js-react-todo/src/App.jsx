import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [newEntry, setNewEntry] = useState("")
  const [tasks, setTasks] = useState(["task1", "task2"])

  return (
    <div className="container">
      <h1>React To-Do App</h1>
      <div className="d-flex gap-3">
        <input type="text" placeholder="New Task" className="flex-fill" value={newEntry} onChange={(e) => setNewEntry(e.target.value)}></input>
        <button class="btn btn-primary" onClick={() => setTasks([...tasks, newEntry])}>Submit</button>
      </div>
      <p>New task is {newEntry}</p>
      <h2>Current Tasks</h2>
      <ul>
        {tasks.map((task) => <li>{task}</li>)}
      </ul>
      
    </div>
  )
}

export default App
