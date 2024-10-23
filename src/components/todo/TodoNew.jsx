import "./todo.css"
const TodoNew = (props) => {
    const { addNewTodo } = props

    // addNewTodo("Taos")
    const handleClick = () => {
        alert("click me")
    }
    // const handleOnChange = (event) => {
    //     console.log("handle on change", event.target.value)
    // }
    const handleOnChange = (name) => {
        console.log("handle on change", name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                // onChange={handleOnChange}
                onChange={(Event) => handleOnChange(Event.target.value)}
            />
            <button
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            >ADD</button>
        </div>
    )
}

export default TodoNew;