import { useState } from 'react'
import './App.css'
import Task from './Task'

function App() {
  const [count, setCount] = useState(0)
  const [newEntry, setNewEntry] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, newEntry])
  }

  const delTodo = (todo) => {
    setTodos(todos.filter((x) => x != todo))
  }

  const editTodo = (oldTitle, newTitle) => {
    const newTodos = todos.map((x) => {
      if (x == oldTitle) {
        return newTitle
      }
      return x
    })
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <h1>React To-Do App</h1>
      <div className="d-flex gap-3">
        <input type="text" placeholder="New Task" className="flex-fill" value={newEntry} onChange={(e) => setNewEntry(e.target.value)}></input>
        <button className="btn btn-primary" onClick={() => setTodos([...todos, newEntry])}>Submit</button>
      </div>
      <p>New task is {newEntry}</p>
      <h2>Current Tasks</h2>
      <div className="d-flex flex-column gap-1">
        {todos.map((task) => <Task title={task} delTodo={delTodo} editTodo={editTodo}></Task>)}
      </div>
      
    </div>
  )
}

export default App
