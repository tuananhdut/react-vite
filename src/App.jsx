import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"
const App = () => {
  const name = "Taos";
  const age = 25;
  const data = {
    name: "Taos",
    age: 25,
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`call mee ${name}`)
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
      />
    </div>
  )
}

export default App
