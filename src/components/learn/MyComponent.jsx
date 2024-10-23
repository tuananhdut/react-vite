import "./style.css"
// jsx - chi tra ve mot element
// fragment (manh vo) - 

const MyComponent = () => {
    return (
        <>
            <div>Create application</div>
            <div className="myName" style={
                { borderRadius: "10px" }
            }
            >My name</div>
        </>
    );
}

export default MyComponent;