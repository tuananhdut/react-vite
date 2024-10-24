import TodoNew from "./TodoNew"
import TodoData from "./TodoData"
import { useState } from "react"

const TodoApp = () => {

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
    )
}

export default TodoApp