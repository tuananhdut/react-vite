import { useState } from "react"
import "./todo.css"
const TodoNew = (props) => {
    //const valueInput = ""; js thuong
    //useState hook (getter/ setter)
    const [valueInput, setValueInput] = useState("Taos")
    const { addNewTodo } = props

    const handleClick = () => {
        addNewTodo(valueInput)
    }

    const handleOnChange = (name) => {
        //console.log(">> handleonchange",name)
        setValueInput(name)
    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(Event) => handleOnChange(Event.target.value)}
            />
            <button
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            >ADD</button>
            <div>my text input = {valueInput}</div>
        </div>
    )
}

export default TodoNew;