import "./todo.css"
const TodoNew = (props) => {
    const { addNewTodo } = props

    addNewTodo("Taos")
    return (
        <div className="todo-new">
            <input type="text" name="inputTodo" />
            <button>ADD</button>
        </div>
    )
}

export default TodoNew;