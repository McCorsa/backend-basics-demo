import { useState } from "react"

function Task({title}) {
    const [edit, setEdit] = useState(false)

    return (
        <div className="d-flex flex-fill p-1 gap-2 border align-items-center">
            {edit ? <>
                <input className="flex-fill" defaultValue={title}></input>
                <button className="btn btn-success" onClick={() => setEdit(false)}><i className="bi bi-save"></i></button>
                <button className="btn btn-danger"><i className="bi bi-x-lg"></i></button>
            </> : <>
                <div className="flex-fill">{title}</div>
                <div className="">date</div>
                <button className="btn btn-primary" onClick={() => setEdit(true)}><i className="bi bi-pen"></i></button>
                <button className="btn btn-danger"><i className="bi bi-x-lg"></i></button>
            </>}
        </div>
    )
}

export default Task