import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"
import { useState } from "react"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import { Outlet } from "react-router-dom"
const App = () => {

  const [todoList, setTodoList] = useState([])

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    const newListTodo = todoList.filter(item => item.id !== id)
    setTodoList(newListTodo)

    // setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
  };


  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">TODO LIST</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        {todoList.length > 0 &&
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
        }
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
