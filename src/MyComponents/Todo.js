import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todo = (props) => {
  let mystyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='text-center my-4'>TODO LIST</h3>
      {props.todo.length === 0 ? "No Tasks to display." :
        props.todo.map((todo) => {
          return(
            <TodoItem task={todo} key={todo.sno} ondelete={props.ondelete} />
          )
        })}
    </div>
  )
}
