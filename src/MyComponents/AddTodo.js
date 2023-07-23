import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank!")
        }
        else{
            props.addTodo(title,desc);
        settitle("")
        setdesc("")
        }
    }

    return (
        <div className='container'>
            <h4 className='my-3'>Add a TASK</h4>
            <form onSubmit={submit}>
                <div className="mb-3 my-4">
                    <label htmlFor="title" className="form-label">ToDo Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>settitle(e.target.value)} placeholder="Your task here." />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <textarea className="form-control" id="desc" value={desc} onChange={(e)=>setdesc(e.target.value)} rows="3"></textarea>
                    <button className="btn btn-success my-3">Add Task</button>
                </div>
            </form>
        </div>
    )
}
