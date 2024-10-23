import { useState } from "react"
import "./todo.css"
const TodoNew = (props) => {
    //useState hook (getter/ setter)
    const [valueInput, setValueInput] = useState("taos")
    const { addNewTodo } = props

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(Event) => handleOnChange(Event.target.value)}
                value={valueInput}
            />
            <button
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            >ADD</button>
        </div>
    )
}

export default TodoNew;