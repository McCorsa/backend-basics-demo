import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)
  const [newEntry, setNewEntry] = useState("")

  return (
    <div className="container">
      <h1>React To-Do App</h1>
      <div className="d-flex gap-3">
        <input type="text" placeholder="New Task" className="flex-fill" value={newEntry} onChange={(e) => setNewEntry(e.target.value)}></input>
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  )
}

export default App
