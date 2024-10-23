import "./todo.css"
const TodoData = (props) => {
    const { name, data, age, todoList } = props
    return (
        <div className="todo-data">
            <div >My name is {name}</div>
            <div >REACT</div>
            <div >Watching Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;