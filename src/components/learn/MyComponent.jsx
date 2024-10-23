import "./style.css"
// jsx - chi tra ve mot element
// fragment (manh vo)

const MyComponent = () => {
    // const value = "Taos"
    // const value = 25
    // const value = null
    // const value  = undefined
    // const value = true
    // const value = [1, 2, 3]
    const value = {
        name: "Taos",
        age: 25
    }
    return (
        <>
            <div>{JSON.stringify(value)} application</div>
            <div className="myName" style={{ borderRadius: "10px" }}
            >My name</div>
        </>
    );
}

export default MyComponent;