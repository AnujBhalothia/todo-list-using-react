import React from 'react'

export const TodoItem = (props) => {
  return (
    <>
    <div className='my-3'>
        <h4>{props.task.title}</h4>
        <p>{props.task.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{props.ondelete(props.task)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}