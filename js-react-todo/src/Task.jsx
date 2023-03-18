import { useState } from "react"

function Task({title, delTodo, editTodo}) {
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(title)

    const completeEdit = () => {
        editTodo(title, editTitle)
        setEdit(false)
    }

    return (
        <div className="d-flex flex-fill p-1 gap-2 border align-items-center">
            {edit ? <>
                <input className="flex-fill" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}></input>
                <button className="btn btn-success" onClick={() => completeEdit()}><i className="bi bi-save"></i></button>
            </> : <>
                <div className="flex-fill">{title}</div>
                <div className="">date</div>
                <button className="btn btn-primary" onClick={() => setEdit(true)}><i className="bi bi-pen"></i></button>
            </>}
            <button className="btn btn-danger" onClick={() => delTodo(title)}><i className="bi bi-x-lg"></i></button>
        </div>
    )
}

export default Task