import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todo } from "./MyComponents/Todo";
import { AddTodo } from "./MyComponents/AddTodo"
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const ondelete = (task) => {
    settodo(todo.filter((e) => {
      return e !== task;
    }));
    localStorage.setItem("todo", JSON.stringify(todo));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todo.length == 0) {
      sno = 1
    }
    else {
      sno = todo[todo.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodo([...todo, myTodo]);
  }

  const [todo, settodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo])


  return (
    <>
      <Router>
        <Header title="Todo List" />
        <Routes>
          <Route exact path="/" element={<>
                <AddTodo addTodo={addTodo} />
                <Todo todo={todo} ondelete={ondelete} />
              </>}/>
          <Route exact path="/about" element={<About />}/>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
