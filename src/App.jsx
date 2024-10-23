import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"
import { useState } from "react"
const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "tuan anh" },
    { id: 2, name: "Taos" }
  ])

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const name = "Taos";
  const age = 25;
  const data = {
    name: "Taos",
    age: 25,
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }


  return (
    <div className="todo-container">
      <div className="todo-title">TODO LIST</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
    </div>
  )
}

export default App
